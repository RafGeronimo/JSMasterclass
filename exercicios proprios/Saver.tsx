import { observer } from "mobx-react";
import { useEffect } from "react";
import { useQfdJsonDataMutation } from "components/ghraphiQL/QFD/QFDJsonData.gql";
import { DataQFD } from "../Models/structure";

type SaverProps = {
 id: number;
 name: string;
 dataQFD: DataQFD;
};

const Saver = observer(({ id, name, dataQFD }: SaverProps) => {
 const json = dataQFD.asJSON;

 const { mutateAsync } = useQfdJsonDataMutation();

 useEffect(() => {
  const timeoutId = setTimeout(() => {
   mutateAsync({ object: { id: id, name: name, data: json } });
  }, 500);

  return () => clearTimeout(timeoutId);
 }, [json]);

 return null;
});

export default Saver;
