import { useQfdJsonDataMutation } from "components/ghraphiQL/QFD/QFDJsonData.gql";
import { useUpsertCompetitorsMutation } from "components/ghraphiQL/QFD/upsertCompetitors.gql";
import { useUpsertCustomerCompetitorsMutation } from "components/ghraphiQL/QFD/upsertCustomerCompetitors.gql";
import { useUpsertCustomerFunctionalMutation } from "components/ghraphiQL/QFD/upsertCustomerFunctional.gql";
import { useUpsertCustomerRequirementMutation } from "components/ghraphiQL/QFD/upsertCustomerRequirement.gql";
import { useUpsertFunctionalProjectMutation } from "components/ghraphiQL/QFD/upsertFunctionalProject.gql";
import { useUpsertFunctionalRequirementMutation } from "components/ghraphiQL/QFD/upsertFunctionalRequirement.gql";
import { useUpsertPairwiseRelationsMutation } from "components/ghraphiQL/QFD/upsertPairwiseRelations.gql";
import { useUpsertProjectParameterMutation } from "components/ghraphiQL/QFD/upsertProjectParameter.gql";
import { CustomerRequirement } from "components/QFD/Models/CustomerRequirement";
import { DataQFD, DataQFDSnapshot } from "components/QFD/Models/structure";
import { dataQFDSnapshotSchema } from "types/QFD/zodSchemas";

type CustomerPayload = {
 QFDId: number;
 currentSituation: number;
 customerRelevance: number;
 evaluationTarget: number;
 dissatisfactionCoefficient: number;
 satisfactionCoefficient: number;
 kanoModelClassification: string | null;
 maxRelRow: number;
 score: number;
 title: string;
 id: number | undefined;
};

type CompetitorsPayload = { name: string };

type CustomerCompetitorPayload = { cR_id: number; comp_id: number; score: number };

type PairwisePayload = { cR_idOne: number; cR_idTwo: number; relationValue: number };

type FunctionalPayload = {
 QFDId: number;
 actionOrder: number | null;
 improvementDirection: string;
 maxRelCol: number;
 maxRelRow: number;
 relativeImportance: number;
 relativeImportanceSecondHoQ: number;
 title: string;
 weight: number;
};

type CustomerFunctionalPayload = { cR_id: number; fR_id: number; relationValue: number };

type ProjectParPayload = {
 QFDId: number;
 actionOrder: number | null;
 improvementDirection: string;
 maxRelCol: number;
 maxRelRow: number;
 relativeImportance: number;
 relativeImportanceThirdHoQ: number;
 subsistem: null | string;
 title: string;
 weight: number;
};

type FunctionalProjectPayload = { fR_id: number; pP_id: number; relationValue: number };

async function saveQFDFirstData(dataQFD: DataQFDSnapshot, QFDId: string | string[] | undefined) {
 const customerPayload: CustomerPayload[] = [];
 const competitorsPayload: CompetitorsPayload[] = [];
 const customerCompetitorPayload: CustomerCompetitorPayload[] = [];
 const pairwisePayload: PairwisePayload[] = [];
 const functionalPayload: FunctionalPayload[] = [];
 const customerFunctionalPayload: CustomerFunctionalPayload[] = [];
 const projectParPayload: ProjectParPayload[] = [];
 const functionalProjectPayload: FunctionalPayload[] = [];

 //  const customerRequirements = Array.from(dataQFD.customerRequirements.values());
 //  const functionalRequirements = Array.from(dataQFD.functionalRequirements.values());
 //  const projectParameters = Array.from(dataQFD.projectParameters.values());
 //  const competitors = Array.from(dataQFD.competitors.values());

 const dataQFDInstance = new DataQFD(dataQFD);
 const customerRequirements = Array.from(dataQFDInstance.customerRequirements.values());
 const competitors = Array.from(dataQFDInstance.competitors.values());
 const functionalRequirements = Array.from(dataQFDInstance.functionalRequirements.values());

 if (QFDId !== undefined) {
  const QFDIdParsed = Number(QFDId);
  if (QFDIdParsed) {
   const cRProps: { key: number; id: number; QFDId: number; title: string }[] = [];
   const compProps: { key: number; id: number; name: string }[] = [];
   if (customerRequirements.length !== 0) {
    for (const cR of customerRequirements) {
     const cRObj = {
      QFDId: QFDIdParsed,
      currentSituation: cR.currentSituation,
      customerRelevance: cR.customerRelevance,
      evaluationTarget: cR.evaluationTarget,
      dissatisfactionCoefficient: cR.dissatisfactionCoefficient,
      satisfactionCoefficient: cR.satisfactionCoefficient,
      kanoModelClassification: cR.kanoModelClassification ? cR.kanoModelClassification : null,
      maxRelRow: cR.maxRowRelation,
      score: cR.score,
      title: cR.title,
      id: cR.id, //passa o id caso exista
     };
     try {
      const data = await useUpsertCustomerRequirementMutation.fetcher({ payload: cRObj })(); //salva o cR na tabela
      const cRDataBaseInfo = data.insert_QFD_customerRequirements?.returning[0]; //busca os cR inseridos ou modificados e retorna o id
      if (cRDataBaseInfo) {
       cR.setId(cRDataBaseInfo.id); //método para setar id nos customerRequirements
       cRProps.push({ key: cR.key, ...cRDataBaseInfo }); //objeto utilizado para outra mutation...
      }
     } catch (e) {
      console.error("Error saving customer requirement", e);
     }
    }

    for (const cR of customerRequirements) {
     const cRDB = cRProps.find((cRDB) => cRDB.key === cR.key);
     if (cRDB) {
      const cRId = cRDB.id;
      const relations = cR.pairwiseRelations.values();
      for (const rel of relations) {
       const relatedCRDB = cRProps.find((cRDB) => cRDB.key === rel.key);
       if (relatedCRDB) {
        const relatedCRId = relatedCRDB.id;
        const relationObj = { cR_idOne: cRId, cR_idTwo: relatedCRId, relationValue: rel.value };
        try {
         await useUpsertPairwiseRelationsMutation.fetcher({ payload: relationObj })();
        } catch (e) {
         console.error("Error sanving pairwise relations", e);
        }
       }
      }
     }
    }
   }
   if (competitors.length !== 0) {
    for (const c of competitors) {
     const compObj = {
      id: c.id,
      QFDId: QFDIdParsed,
      name: c.name,
     };
     try {
      const data = await useUpsertCompetitorsMutation.fetcher({ payload: compObj })();
      const competitorDatabaseInfo = data.insert_QFD_competitors?.returning[0];
      if (competitorDatabaseInfo) {
       c.setId(competitorDatabaseInfo.id);
       compProps.push({ key: c.key, ...competitorDatabaseInfo });
      }
     } catch (e) {
      console.error("Error saving competitor", e);
     }
    }
   }
   if (cRProps.length !== 0 && compProps.length !== 0) {
    for (const cR of customerRequirements) {
     for (const comp of competitors) {
      const competitorRelations = cR.competitorRelation;
      const relatedCompetitor = competitorRelations.get(comp.key);
      if (relatedCompetitor) {
       const cRDatabase = cRProps.find((cRDB) => cRDB.key === cR.key);
       const compDatabase = compProps.find((comp) => comp.key === relatedCompetitor.key);
       if (cRDatabase && compDatabase) {
        const cRCompRelationObj = {
         cR_id: cRDatabase.id,
         comp_id: compDatabase.id,
         score: relatedCompetitor.relation ? relatedCompetitor.relation : 0,
        };
        if (cRCompRelationObj) customerCompetitorPayload.push(cRCompRelationObj);
       }
      }
     }
    }
   }
   if (customerCompetitorPayload.length !== 0) {
    console.log("customerCompe", customerCompetitorPayload);
    try {
     await useUpsertCustomerCompetitorsMutation.fetcher({ payload: customerCompetitorPayload })();
    } catch (e) {
     console.error("Error saving customer requirement and competitor relations", e);
    }
   }
  }
  const json = dataQFDInstance.asJSON; //constrói um novo json
  const validJson = dataQFDSnapshotSchema.safeParse(json); //ajoelhe-se diante de Zod
  useQfdJsonDataMutation.fetcher({ object: { id: QFDIdParsed, name: dataQFDInstance.name, data: validJson.data } })(); // salva o json na tabela do QFD
 }
}

export default saveQFDFirstData;
