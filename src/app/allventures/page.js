import VenturesSection from "@/components/section/All-Ventures-Page/cards_section";
import VenturesGrid from "@/components/section/All-Ventures-Page/cards_section";
import VenturesPage from "@/components/section/All-Ventures-Page/hero";

export default function allventures() {
  return (
    <>
     <VenturesPage/>
   {/* <VenturesGrid/> */}
   <VenturesSection/>
    </>
  );
}