import  "./index.scss";
import FirstSentence from "../../components/top/firstsentence/FirstSentence";
import SecondSentence from "../../components/top/secondsentence/SecondSentence";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SkillsTable from "@/components/SkillsTable";
import SkillsSlider from "@/components/skillsSlider";

export default function Top() {
  return (
    <div>
      <Header />
      {/* <FirstSentence /> */}

      <SkillsSlider />

      <SecondSentence />

      {/* <ThirdSentence /> */}

      <Footer />
    </div>
  );
}
