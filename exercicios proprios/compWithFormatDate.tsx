import { View, Text } from "@react-pdf/renderer";
import { styles } from "../../components/componentsStyle/styles";
import { format } from "date-fns";
import { DvperRender } from "types/pdfReportTypes";

type DvperDetectionTableLabledRowProps = {
 dvpers: DvperRender[];
};

export default function DvperDetectionTableLabledRow({ dvpers }: DvperDetectionTableLabledRowProps) {
 let tagColor = "";
 let tagStyle = { color: "", fontSize: "1.1em" };
 return (
  <>
   {dvpers.length !== 0 &&
    dvpers.map((field, index) => {
     let tagColor = "";
     let tagStyle = { color: "", fontSize: "1.1em" };
     if (field.ap == "S") {
      tagColor = "black";
      tagStyle.color = "white";
     } else if (field.ap == "H") {
      tagColor = "#ff4d4f";
      tagStyle.color = "black";
     } else if (field.ap == "M") {
      tagColor = "#fadb14";
      tagStyle.color = "black";
     } else if (field.ap == "L") {
      tagColor = "rgb(115,209,61)"; //linear-gradient(-45deg, rgb(43,10,228) 15%, rgb(115,209,61) 15%)
      tagStyle.color = "black";
     }
     let resultadoColor = "";
     if (field.detectionRT == "Aprovado") {
      resultadoColor = "#73d13d";
     } else if (field.detectionRT == "Não aprovado") {
      resultadoColor = "#ff4d4f";
     }
     return (
      <View style={styles.row} key={"detectionViewKey" + index} wrap={false}>
       <Text
        key={"a" + index}
        style={[styles.cell, styles.tableLabel, { width: "5%" }, { backgroundColor: `${tagColor}` }, { color: `${tagStyle.color}` }]}
       >
        {index + 1}
       </Text>
       <Text key={"b" + index} style={[styles.cell, styles.tableLabel, { width: "15%" }]}>
        {field.detectionControl}
       </Text>
       <Text key={"c" + index} style={[styles.cell, styles.tableLabel, { width: "15%" }]}>
        {field.detectionD}
       </Text>
       <Text key={"d" + index} style={[styles.cell, styles.tableLabel, { width: "12.5%" }]}>
        {field.detectionCA}
       </Text>
       <Text key={"e" + index} style={[styles.cell, styles.tableLabel, { width: "12.5%" }]}>
        {field.detectionRP}
       </Text>
       <Text key={"f" + index} style={[styles.cell, styles.tableLabel, { width: "10%" }]}>
        {field.detectionRT}
       </Text>
       <Text key={"g" + index} style={[styles.cell, styles.tableLabel, { width: "10%" }]}>
        {field.detectionDT !== null ? format(field.detectionDT, "dd/MM/yyyy") : null}
       </Text>
       <Text key={"h" + index} style={[styles.cell, styles.tableLabel, { width: "12%" }]}>
        {field.detectionCT}
       </Text>
       <Text key={"i" + index} style={[styles.cell, styles.tableLabel, { width: "10%" }]}>
        {field.detectionPH}
       </Text>
       <Text key={"j" + index} style={[styles.cell, styles.tableLabel, { width: "8%" }]}>
        {field.detectionST}
       </Text>
      </View>
     );
    })}
  </>
 );
}
