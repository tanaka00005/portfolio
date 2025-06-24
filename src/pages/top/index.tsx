import "./index.scss";
//import FirstSentence from "../../components/top/firstsentence/FirstSentence";
import SecondSentence from "../../components/top/secondsentence/SecondSentence";
import Footer from "@/components/footer";
import SkillsSlider from "@/components/skillsSlider";
import Awards from "@/components/Awards";
import IconTable from "@/components/skill/IconTable";
import Title from "@/components/title";
import { Kiwi_Maru } from "next/font/google";

const KiwiMaru = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
})

export default function Top() {
  return (
    <div className={KiwiMaru.className}>
      {/* <Footer /> */}
      {/* <FirstSentence /> */}

      <Title />
      <SkillsSlider />

      <SecondSentence />

      {/* <ThirdSentence /> */}
      <IconTable />

      <Awards />
      {/* <Footer /> */}
    </div>
  );
}
