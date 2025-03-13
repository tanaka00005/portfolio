import  "./index.scss";
import FirstSentence from "../../components/top/firstsentence/FirstSentence";
import SecondSentence from "../../components/top/secondsentence/SecondSentence";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Top() {
  return (
    <div>
      <Header />
      <FirstSentence />

      <SecondSentence />

      {/* <ThirdSentence /> */}

      <Footer />
    </div>
  );
}
