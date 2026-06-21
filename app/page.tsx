import Index from "./home";
import model_getGrupos from "./model/server";

export default async function Page() {
  const grupos = await model_getGrupos();
  return <Index grupos={grupos} />;
}
