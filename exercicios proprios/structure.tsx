import { makeAutoObservable } from "mobx";
import { ExpandableTableData } from "./CustomerRequirement";
import { CustomerRequirement } from "./CustomerRequirement";
import { FunctionalRequirement } from "./FunctionalRequirement";
import { ProjectParameter } from "./ProjectParameter";
import { ProcessVariable } from "./ProcessVariable";
import { ProcessParameter } from "./ProcessParameter";
import { Item } from "./Item";
import { Funcao } from "./Funcao";
import ModoDeFalha from "./ModoDeFalha";

export type RelationSnapshot = {
 key: number;
 relation: number;
};

export type CRRelation = {
 customerRequirement: CustomerRequirement;
} & RelationSnapshot;

export type FRRelation = {
 functionalRequirement: FunctionalRequirement;
} & RelationSnapshot;

export type PPRelation = {
 projectParameter: ProjectParameter;
} & RelationSnapshot;

export type PVRelation = {
 processVariable: ProcessVariable;
} & RelationSnapshot;

export type PParRelation = {
 processParameter: ProcessParameter;
} & RelationSnapshot;

export type CustomerRequirementsSnapshot = {
 key: number;
 idNum: number;
 title: string;
 maximumRowRelationship: number | null;
 relativeImportance: number;
 kanoModelClassification: string;
 customerRelevance: number;
 expandedTable: ExpandableTableData[];
 functionalRequirementRelations: RelationSnapshot[];
};

export type FunctionalRequirementsSnapshot = {
 key: number;
 title: string;
 dataIndex: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 improvementDirection: string;
 projectParameterRelations: RelationSnapshot[];
};

export type ProjectParametersSnapshot = {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number;
 relativeImportance: number | null;
 actionOrder: number | null;
 processVariableRelations: RelationSnapshot[];
};

export type ProcessVariablesSnapshot = {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 processParameterRelations: RelationSnapshot[];
};

export type ProcessParametersSnapshot = {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 processVariableRelations: RelationSnapshot[];
};

export type DataQFDSnapshot = {
 id: number;
 name: string;
 customerRequirements: CustomerRequirementsSnapshot[];
 functionalRequirements: FunctionalRequirementsSnapshot[];
 projectParameters: ProjectParametersSnapshot[];
 processVariables: ProcessVariablesSnapshot[];
 processParameters: ProcessParametersSnapshot[];
 items: Item[];
 //functions: Funcao[];
};

export class DataQFD {
 id: number;
 name: string;
 customerRequirements: Map<number, CustomerRequirement>;
 functionalRequirements: Map<number, FunctionalRequirement>;
 projectParameters: Map<number, ProjectParameter>;
 processVariables: Map<number, ProcessVariable>;
 processParameters: Map<number, ProcessParameter>;
 items: Map<number, Item>;
 //functions: Map<number, Funcao>;

 addItem(i: Item) {
  this.items.set(i.propriedades.key, i);
 }

 addMode(itemKey: number, funcKey: number, m: ModoDeFalha) {
  const item = this.items.get(itemKey);
  if (item) {
   const funcao = item.funcoes.find((f) => f.propriedades.key === funcKey);
   if (funcao) {
    funcao.modos.push(m);
    console.log(funcao.modos);
   }
  }
 }

 //  addFuncao(f: Funcao) {
 //   this.functions.set(f.propriedades.key, f);
 //  }

 addFunctionalRequirement(fR: FunctionalRequirement) {
  this.functionalRequirements.set(fR.key, fR);
 }

 addProjectParameter(pP: ProjectParameter) {
  this.projectParameters.set(pP.key, pP);
 }

 deleteFunctionalRequirement(key: number) {
  this.functionalRequirements.delete(key);
 }

 deleteProjectParameter(key: number) {
  this.projectParameters.delete(key);
 }

 get fRTotalWeight() {
  const weightsArray: number[] = [];
  for (const fR of this.functionalRequirements.values()) {
   weightsArray.push(fR.weight);
  }
  const total = weightsArray.length === 0 ? 0 : weightsArray.reduce((acc, value) => acc + value);
  return total;
 }

 get pPTotalWeight() {
  const weightsArray: number[] = [];
  for (const pP of this.projectParameters.values()) {
   if (pP.weight) weightsArray.push(pP.weight);
  }
  const total = weightsArray.length === 0 ? 0 : weightsArray.reduce((acc, value) => acc + value);
  return total;
 }

 get asJSON() {
  const cRSnapshot = Array.from(this.customerRequirements.values()).map((c) => {
   return {
    key: c.key,
    idNum: c.idNum,
    title: c.title,
    maximumRowRelationship: c.maxRowRelation,
    relativeImportance: c.relativeImportance,
    kanoModelClassification: c.kanoModelClassification,
    customerRelevance: c.customerRelevance,
    expandedTable: c.expandedTable,
    functionalRequirementRelations: Array.from(c.functionalRequirementRelations.values()).map((rel) => {
     return {
      key: rel.key,
      relation: rel.relation,
     };
    }),
   };
  });
  const fRSnapshot = Array.from(this.functionalRequirements.values()).map((f) => {
   return {
    key: f.key,
    title: f.title,
    dataIndex: f.title,
    maxRelCol: f.maxRelCol,
    maxRelRow: f.maxRelRow,
    weight: f.weight,
    relativeImportance: f.relativeImportance,
    actionOrder: f.actionOrder,
    improvementDirection: f.improvementDirection,
    projectParameterRelations: Array.from(f.projectParameterRelations.values()).map((rel) => {
     return {
      key: rel.key,
      relation: rel.relation,
     };
    }),
   };
  });

  const pPSnapshot = Array.from(this.projectParameters.values()).map((p) => {
   return {
    key: p.key,
    title: p.title,
    dataIndex: p.title,
    improvementDirection: p.improvementDirection,
    maxRelCol: p.maxRelCol,
    maxRelRow: p.maxRelRow,
    weight: p.weight,
    relativeImportance: p.relativeImportance,
    actionOrder: p.actionOrder,
    processVariableRelations: Array.from(p.processVariableRelations.values()).map((rel) => {
     return {
      key: rel.key,
      relation: rel.relation,
     };
    }),
   };
  });

  const pVSnapshot = Array.from(this.processVariables.values()).map((p) => {
   return {
    key: p.key,
    title: p.title,
    dataIndex: p.title,
    improvementDirection: p.improvementDirection,
    maxRelCol: p.maxRelCol,
    maxRelRow: p.maxRelRow,
    weight: p.weight,
    relativeImportance: p.relativeImportance,
    actionOrder: p.actionOrder,
    projectParameterRelations: Array.from(p.projectParameterRelations.values()).map((rel) => {
     return {
      key: rel.key,
      relation: rel.relation,
     };
    }),
    processParameterRelations: Array.from(p.processParameterRelations.values()).map((rel) => {
     return {
      key: rel.key,
      relation: rel.relation,
     };
    }),
   };
  });

  const pParSnapshot = Array.from(this.processParameters.values()).map((p) => {
   return {
    key: p.key,
    title: p.title,
    dataIndex: p.title,
    improvementDirection: p.improvementDirection,
    maxRelCol: p.maxRelCol,
    maxRelRow: p.maxRelRow,
    weight: p.weight,
    relativeImportance: p.relativeImportance,
    actionOrder: p.actionOrder,
    processVariableRelations: Array.from(p.processVariableRelations.values()).map((rel) => {
     return {
      key: rel.key,
      relation: rel.relation,
     };
    }),
   };
  });

  const items = Array.from(this.items.values()).map((i) => {
   return {
    displayNumber: i.displayNumber,
    propriedades: {
     key: i.propriedades.key,
     value: i.propriedades.value,
    },
    funcoes: i.funcoes,
   };
  });

  //   const functions = Array.from(this.functions.values()).map((f) => {
  //    return {
  //     key: f.propriedades.key,
  //     fRKey: f.fRKey,
  //     value: f.propriedades.value,
  //     itemKey: f.propriedades.itemKey,
  //     modos: f.modos,
  //    };
  //   });

  const json = {
   id: this.id,
   name: this.name,
   customerRequirements: cRSnapshot,
   functionalRequirements: fRSnapshot,
   projectParameters: pPSnapshot,
   processVariables: pVSnapshot,
   processParameters: pParSnapshot,
   items: items,
   //functions: functions,
  };

  return json;
 }

 get asQFDToFmeaJSON() {
  const fmeaId = 666;
  const items = Array.from(this.items.values()).map((i) => {
   i.asJSON;
   //    return {
   //     key: i.propriedades.key,
   //     value: i.propriedades.value,
   //    };
  });
  const functionalRequirement = Array.from(this.functionalRequirements.values());
  const funcoes = functionalRequirement.map((f) => {
   return {
    key: f.key,
    value: f.title,
    itemKey: null,
   };
  });
  return {
   id: fmeaId,
   time: 3,
   type: "design",
   businessUnit: "WMO",
   fmeaLanguage: "pt-BR",
   item: items,
   funcao: funcoes,
   modo: [
    {
     key: 0,
     value: "modo",
     efeito: "efeito",
     funcaoKey: 0,
     severidade: null,
    },
   ],
   controle: [
    {
     key: 0,
     causaKey: 0,
     deteccao: null,
     deteccaoD: "",
     deteccaoRe: null,
     ocorrencia: null,
     prevencaoD: "",
     ocorrenciaRe: null,
     controleDeDeteccao: "",
     controleDePrevencao: "",
     controleDeDeteccaoNS: "",
    },
   ],
   dvper: [],
  };
 }

 constructor(data: DataQFDSnapshot) {
  this.id = data.id;
  this.name = data.name;

  this.processParameters = new Map(data.processParameters.map((p) => [p.key, new ProcessParameter(p)]));

  const pVInput = data.processVariables.map((pV) => {
   const processParameterRelations = pV.processParameterRelations.map((rel) => {
    const processParameter = this.processParameters.get(rel.key);
    if (!processParameter) throw Error("Process parameter doesn't exist!");
    return { ...rel, processParameter };
   });
   return { ...pV, processParameterRelations };
  });

  this.processVariables = new Map(pVInput.map((p) => [p.key, new ProcessVariable(p)]));

  const pPInput = data.projectParameters.map((p) => {
   const processVariableRelations = p.processVariableRelations.map((rel) => {
    const processVariable = this.processVariables.get(rel.key);
    if (!processVariable) throw Error("Project variable doesn't exist!");
    return { ...rel, processVariable };
   });
   return { ...p, processVariableRelations };
  });

  this.projectParameters = new Map(pPInput.map((p) => [p.key, new ProjectParameter(p, this)]));

  const fRInput = data.functionalRequirements.map((f) => {
   const projectParameterRelations = f.projectParameterRelations.map((rel) => {
    const projectParameter = this.projectParameters.get(rel.key);
    if (!projectParameter) throw Error("Project parameter doesn't exist!");
    return { ...rel, projectParameter };
   });
   return { ...f, projectParameterRelations };
  });

  this.functionalRequirements = new Map(fRInput.map((f) => [f.key, new FunctionalRequirement(f, this)]));

  const cRInput = data.customerRequirements.map((c) => {
   const functionalRequirementRelations = c.functionalRequirementRelations.map((rel) => {
    const functionalRequirement = this.functionalRequirements.get(rel.key);
    if (!functionalRequirement) throw Error("Functional requirement doesn't exist!");
    return { ...rel, functionalRequirement };
   });
   return { ...c, functionalRequirementRelations };
  });

  this.customerRequirements = new Map(cRInput.map((c) => [c.key, new CustomerRequirement(c)]));

  this.items = new Map(data.items.map((i) => [i.propriedades.key, new Item(i)]));

  //   const funcaoInput = data.functions.map((f) => {
  //    const functionalRequirement = this.functionalRequirements.get(f.fRKey);
  //    const item = this.items.get(f.propriedades.key);
  //    if (!item) {
  //     throw Error("Item not found!");
  //    } else if (!functionalRequirement) {
  //     throw Error("Functional requirement not found!");
  //    }
  //    return { key: f.propriedades.key, fR: functionalRequirement, itemKey: item.propriedades.key };
  //   });

  //this.functions = new Map(funcaoInput.map((f) => [f.key, new Funcao(f.key, f.fR, f.itemKey)]));

  makeAutoObservable(this);
 }
}
