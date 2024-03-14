import { makeAutoObservable } from "mobx";

export type RelationSnapshot = {
 key: number;
 relation: number;
};

export type FRRelation = RelationSnapshot & {
 functionalRequirement: FunctionalRequirement;
};

export type PPRelation = {
 projectParameter: ProjectParameter;
} & RelationSnapshot;

export type PVRelation = {
 processVariable: ProcessVariable;
} & RelationSnapshot;

export type PParRelation = {
 processParameter: ProcessParameter;
} & RelationSnapshot;

export type ExpandableTableData = {
 key: number;
 competitorA: number;
 competitorB: number;
 competitorC: number;
 currentSituation: number;
 evaluationTarget: number;
 satisfactionCoefficient: number;
 dissatisfactionCoefficient: number;
 improvementRate: number;
 adjustedImprovementRate: number;
 generalRelevance: number;
};

export type CustomerRequirementsSnapshot = {
 key: number;
 idNum: number;
 title: string;
 maximumRowRelationship: number | null;
 relativeImportance: number;
 kanoModelClassification: string;
 customerRelevance: number;
 expandedTable: ExpandableTableData[];
 fRRelation: RelationSnapshot[];
};

type CustomerRequirementConstructor = {
 functionalRequirementRelations: FRRelation[];
} & CustomerRequirementsSnapshot;

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
 pPRelation: RelationSnapshot[];
};

type FunctionalRequirementConstructor = {
 projectParameterRelations: PPRelation[];
} & FunctionalRequirementsSnapshot;

export type ProjectParametersSnapshot = {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 pVRelations: RelationSnapshot[];
};

type ProjectParameterConstructor = {
 processVariableRelations: PVRelation[];
} & ProjectParametersSnapshot;

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
 pParRelation: RelationSnapshot[];
};

type ProcessVariableConstructor = {
 processParameterRelations: PParRelation[];
} & ProcessVariablesSnapshot;

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
};

type ProcessParameterConstructor = ProcessParametersSnapshot;

type DataQFDSnapshot = {
 id: number;
 name: string;
 customerRequirements: CustomerRequirementsSnapshot[];
 functionalRequirements: FunctionalRequirementsSnapshot[];
 projectParameters: ProjectParametersSnapshot[];
 processVariables: ProcessVariablesSnapshot[];
 processParameters: ProcessParametersSnapshot[];
};

export class DataQFD {
 id: number;
 name: string;
 customerRequirements: Map<number, CustomerRequirement>;
 functionalRequirements: Map<number, FunctionalRequirement>;
 projectParameters: Map<number, ProjectParameter>;
 processVariables: Map<number, ProcessVariable>;
 processParameters: Map<number, ProcessParameter>;

 constructor(data: DataQFDSnapshot) {
  this.id = data.id;
  this.name = data.name;
  this.processParameters = new Map(data.processParameters.map((p) => [p.key, new ProcessParameter(p)]));

  const pVInput = data.processVariables.map((pV) => {
   const processParameterRelations = pV.pParRelation.map((rel) => {
    const processParameter = this.processParameters.get(rel.key);
    if (!processParameter) throw Error("Process parameter doens't exist!");
    return { ...rel, processParameter };
   });
   return { ...pV, processParameterRelations };
  });

  this.processVariables = new Map(pVInput.map((p) => [p.key, new ProcessVariable(p)]));
  const pPInput = data.projectParameters.map((p) => {
   const processVariableRelations = p.pVRelations.map((rel) => {
    const processVariable = this.processVariables.get(rel.key);
    if (!processVariable) throw Error("Project variable doesn't exist!");
    return { ...rel, processVariable };
   });
   return { ...p, processVariableRelations };
  });

  this.projectParameters = new Map(pPInput.map((p) => [p.key, new ProjectParameter(p)]));

  const fRInput = data.functionalRequirements.map((f) => {
   const projectParameterRelations = f.pPRelation.map((rel) => {
    const projectParameter = this.projectParameters.get(rel.key);
    if (!projectParameter) throw Error("Project parameter doensn't exist!");
    return { ...rel, projectParameter };
   });
   return { ...f, projectParameterRelations };
  });

  this.functionalRequirements = new Map(fRInput.map((f) => [f.key, new FunctionalRequirement(f)]));

  const cRInput = data.customerRequirements.map((c) => {
   const functionalRequirementRelations = c.fRRelation.map((rel) => {
    const functionalRequirement = this.functionalRequirements.get(rel.key);
    if (!functionalRequirement) throw Error("Functional requirement doesn't exist!");
    return { ...rel, functionalRequirement };
   });
   return { ...c, functionalRequirementRelations };
  });

  this.customerRequirements = new Map(cRInput.map((c) => [c.key, new CustomerRequirement(c)]));
  makeAutoObservable(this);
 }
}

export class CustomerRequirement {
 key: number;
 idNum: number;
 title: string;
 maximumRowRelationship: number | null;
 relativeImportance: number;
 kanoModelClassification: string;
 customerRelevance: number;
 expandedTable: ExpandableTableData[];
 functionalRequirementRelations: Map<number, FRRelation>;

 constructor(cR: CustomerRequirementConstructor) {
  this.key = cR.key;
  this.idNum = cR.idNum;
  this.title = cR.title;
  this.maximumRowRelationship = cR.maximumRowRelationship;
  this.relativeImportance = cR.relativeImportance;
  this.kanoModelClassification = cR.kanoModelClassification;
  this.customerRelevance = cR.customerRelevance;
  this.expandedTable = cR.expandedTable;
  this.functionalRequirementRelations = new Map(cR.functionalRequirementRelations.map((c) => [c.key, c]));
 }
}

export class FunctionalRequirement {
 key: number;
 title: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 improvementDirection: string;

 constructor(fR: FunctionalRequirementConstructor) {
  this.key = fR.key;
  this.title = fR.title;
  this.maxRelCol = fR.maxRelCol;
  this.maxRelRow = fR.maxRelRow;
  this.weight = fR.weight;
  this.relativeImportance = fR.relativeImportance;
  this.actionOrder = fR.actionOrder;
  this.improvementDirection = fR.improvementDirection;
 }
}

export class ProjectParameter {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;

 constructor(pP: ProjectParameterConstructor) {
  this.key = pP.key;
  this.title = pP.title;
  this.dataIndex = pP.dataIndex;
  this.maxRelCol = pP.maxRelCol;
  this.maxRelRow = pP.maxRelRow;
  this.weight = pP.weight;
  this.relativeImportance = pP.relativeImportance;
  this.actionOrder = pP.actionOrder;
  this.improvementDirection = pP.improvementDirection;
 }
}

export class ProcessVariable {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 constructor(pV: ProcessVariableConstructor) {
  this.key = pV.key;
  this.title = pV.title;
  this.dataIndex = pV.dataIndex;
  this.maxRelCol = pV.maxRelCol;
  this.maxRelRow = pV.maxRelRow;
  this.weight = pV.weight;
  this.relativeImportance = pV.relativeImportance;
  this.actionOrder = pV.actionOrder;
  this.improvementDirection = pV.improvementDirection;
 }
}

export class ProcessParameter {
 key: number;
 title: string;
 dataIndex: string;
 improvementDirection: string;
 maxRelCol: number | null;
 maxRelRow: number | null;
 weight: number | null;
 relativeImportance: number | null;
 actionOrder: number | null;
 constructor(pP: ProcessParameterConstructor) {
  this.key = pP.key;
  this.title = pP.title;
  this.dataIndex = pP.dataIndex;
  this.maxRelCol = pP.maxRelCol;
  this.maxRelRow = pP.maxRelRow;
  this.weight = pP.weight;
  this.relativeImportance = pP.relativeImportance;
  this.actionOrder = pP.actionOrder;
  this.improvementDirection = pP.improvementDirection;
 }
}

//  addFunctionalRequirement(fr: FunctionalRequirement) {
//   this.functionalRequirements.set(fr.key, fr);
//  }

//  deleteFunctionalRequirement(key: number) {
//   this.functionalRequirements.delete(key);
//  }

//  editFunctionalRequirement(key: number, updatedData: Partial<FunctionalRequirements>) {
//   const selectedFR = this.functionalRequirements.get(key);
//   if (selectedFR) this.functionalRequirements.set(key, { ...selectedFR, ...updatedData });
//  }

//  setFunctionalRequirementRelation(key: number, value: FRRelation) {
//   this.fRRelations.set(key, value);
//  }

// class CustomerRequirements {
//   id: number;
//   title: string;
//   competitiveAnalysis: CompetitiveAnalysis;
//   relevanceIndex: RelevanceIndex;
//   customerRelevance: {};
//   kanoRanking: {};

//   funcionalRequirementsRelations: Map<number, {}>;

//   get dnioaodw) {
//     return competaonoa + 2 - dbiuawobd
//   }

//   constructor() {

//     makeAutoObservable(this)
//   }

//   adad iudbaibd

// }
// new FunctionalRequirement({doiawdoa})

// class FunctionalRequirement {
//   id: number;

//   title: string;
//   competitiveAnalysis: CompetitiveAnalysis;
//   relevanceIndex: RelevanceIndex;
//   customerRelevance: {};
//   kanoRanking: {};

//   funcionalRequirementsRelations: Map<number, {}>;
// }

// class ProjectParameters {
//   id: number;

//   title: string;
//   competitiveAnalysis: CompetitiveAnalysis;
//   relevanceIndex: RelevanceIndex;
//   customerRelevance: {};
//   kanoRanking: {};

//   funcionalRequirementsRelations: Map<number, {}>;
// }

// class ProcessVariables {
//   id: number;

//   title: string;
//   competitiveAnalysis: CompetitiveAnalysis;
//   relevanceIndex: RelevanceIndex;
//   customerRelevance: {};
//   kanoRanking: {};

//   funcionalRequirementsRelations: Map<number, {}>;
// }

// class ProcessParameters {
//   id: number;

//   title: string;
//   competitiveAnalysis: CompetitiveAnalysis;
//   relevanceIndex: RelevanceIndex;
//   customerRelevance: {};
//   kanoRanking: {};

//   funcionalRequirementsRelations: Map<number, {}>;
// }

//  this.customerRequirements = observable.map(data.customerRequirements.map((c) => [c.key, c]));
//  this.functionalRequirements = observable.map(data.functionalRequirements.map((f) => [f.key, f]));
//  this.projectParameters = observable.map(data.projectParameters.map((p) => [p.key, p]));
//  this.processVariables = observable.map(data.processVariables.map((p) => [p.key, p]));
//  this.processParameters = observable.map(data.processParameters.map((p) => [p.key, p]));
