import SiteContainer from "../components/SiteContainer";
import ItalicLink from "../components/ItalicLink";
import getAge from "../util/getAge";

function AboutMe(siteLang) {
  const AboutMeNL = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="mt-28 font-bold text-5xl mb-4">Hallo, ik ben Douwe 👋</h1>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Ik ben een eerste-jaars student aan het Alfa-College als Software Developer. Ik volg deze opleiding sinds
            september 2022. Ik ben {getAge("2004/11/26")} jaar oud, mijn verjaardag is op 26 november en ik heb 3 honden
            en 3 katten. Ik heb al sinds een jonge leeftijd een gezonde obsessie met technologie, en ik kijk uit naar
            mijn toekomst.
          </p>

          <h2 className="text-4xl mb-4">Wat ik doe 😶‍🌫️</h2>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Naast mijn opleiding en het programmeren doe ik nog meer dingen. Ik wandel graag, alleen of met anderen, of
            met mijn honden. Ik interesseer mij in media (ruime manier van zeggen dat ik graag Netflix kijk). Eens in de
            zoveel tijd ga ik naar buiten om door het bos een rondje te hardlopen. Ik houd mij bezig met het huishouden.
            En ik houd mij graag bezig met mijn hobbies.
          </p>

          <h2 className="text-4xl mb-4">Waarom Software Development ❓</h2>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Al sinds mijn vijfde gebruikte ik een computer. Ik begon met algemeen gebruik maar dit groeide al snel naar
            een goed verstand in wat allemaal mogelijk is met een computer. Als jong kind speelde ik veel video games en
            hierdoor maakte ik kennis met de communities van deze videogames, onder andere{" "}
            <ItalicLink title="minecraft.net" href="https://www.minecraft.net/">
              Minecraft
            </ItalicLink>
            . Minecraft heeft een enorme community besteed aan modding en exploiting en dit is iets waar ik mij enorm
            voor interesseerde. Ik raakte bevriend met mensen die hier verstand van hadden, en sindsdien heb ik altijd
            ook dat willen en kunnen doen. Hoe meer ik mij verdiepte in hoe coding werkte hoe meer ik er van wilde
            weten. Het snowball-effect is dat ik mij uiteindelijk heb aangemeld voor de opleiding Software Developer.
          </p>

          <h2 className="text-4xl mb-4">Hobbies 🕹️</h2>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Ik doe veel dingen in mijn vrije tijd, maar niet alles wat ik doe is per se een hobby van mij. Ik word erg
            blij van coderen in mijn vrije tijd. Ik speel voornamelijk graag video games, hier heb ik ook iets over te
            vertellen. Ik speel sinds 2015{" "}
            <ItalicLink title="steam.com/geometrydash" href="https://store.steampowered.com/app/322170/Geometry_Dash/">
              Geometry Dash
            </ItalicLink>
            . Ik ben hier erg goed in en ik heb inmiddels over 2500 uur op dit spel op{" "}
            <ItalicLink title="steam.com" href="https://store.steampowered.com/">
              Steam
            </ItalicLink>
            , maar het totaal aantal ligt waarschijnlijk in de 7000+ omdat ik pas sinds 2019 via Steam speel (hiervoor
            op mobile). Ik speel ook graag{" "}
            <ItalicLink title="steam.com/bloonsTD6" href="https://store.steampowered.com/app/960090/Bloons_TD_6/">
              Bloons TD 6
            </ItalicLink>{" "}
            en{" "}
            <ItalicLink title="steam.com/GTA5" href="https://www.rockstargames.com/gta-v">
              GTA V
            </ItalicLink>
            . Ook ben ik graag bezig met coding en het leren hiervan. Ik heb in mijn vrije tijd mijzelf de basis van
            Python, HTML, PHP, CSS, JavaScript, Java, C#, Kotlin, TypeScript, React & Rust. aangeleerd in het laatste
            jaar.
          </p>
        </>
      </SiteContainer>
    );
  };

  const AboutMeEN = () => {
    return (
      <SiteContainer>
        <>
          <h1 className="mt-28 font-bold text-5xl mb-4">Hi, I'm Douwe 👋</h1>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            I am a first year student at the Alfa-College where I study to become a Software Developer. I've been taking
            this course since September 2022. I am 18 years old, my birthday is on the 26th of November and I have 3
            dogs and 3 cats. From a young age I've always had a healthy obesssion with technology, and I look forward to
            my future.
          </p>

          <h2 className="text-4xl mb-4">What I do 😶‍🌫️</h2>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Apart from my study and the coding I do a handful of other things in my life. I go on walks, alone or with
            others, or with my dogs. I take part in the consumation of digital media (rich way of saying: I watch
            Netflix). Once in a while I like to go on a run in the woods near my house. I keep up with the household. I
            also enjoy spending my time on my hobbies.
          </p>

          <h2 className="text-4xl mb-4">Why Software Development ❓</h2>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            Ever since I was five I've been using a computer. I began with general use but this quickly grew into a
            solid understanding of what all is possible with a computer. As a young child I played a lot of video games,
            and through this I got entangled into the communities of said games, namely{" "}
            <ItalicLink title="minecraft.net" href="https://www.minecraft.net/">
              Minecraft
            </ItalicLink>
            . Minecraft has an enormous community dedicated to modding and exploiting, and this is something I was very
            interested in. I became friends with people who knew a lot about how it worked and ever since I've always
            wanted to have the know-how to do what they did. The more I chased that feeling and the more I delved deeper
            into how coding worked, the more I found out and wanted to learn. This snowball-effect eventually made me
            apply to the study to study Software Development.
          </p>

          <h2 className="text-4xl mb-4">Hobbies 🕹️</h2>
          <p className="text-gray-300 text-lg leading-6 mb-12">
            I do a lot of things in my free time, but not everything I do is a hobby of mine per say. I am very happy to
            spend my time coding in my free time. I enjoy playing video games a lot, here are a handfull of them. Since
            2014 I've been playing{" "}
            <ItalicLink title="steam.com/geometrydash" href="https://store.steampowered.com/app/322170/Geometry_Dash/">
              Geometry Dash
            </ItalicLink>
            . I am quite good at the game and I have emassed over 2500 hours on it through{" "}
            <ItalicLink title="steam.com" href="https://store.steampowered.com/">
              Steam
            </ItalicLink>
            , althought the total amount of time spent on it likely sits closer to 7000, this is due to the fact that I
            played on a mobile phone from 2014 to 2019. I also like to play{" "}
            <ItalicLink title="steam.com/bloonsTD6" href="https://store.steampowered.com/app/960090/Bloons_TD_6/">
              Bloons TD 6
            </ItalicLink>{" "}
            and{" "}
            <ItalicLink title="steam.com/GTA5" href="https://www.rockstargames.com/gta-v">
              GTA V
            </ItalicLink>
            . I also enjoy coding and learning how to code better. As of now I've taught myself how to use Python, HTML,
            PHP, CSS, JavaScript, Java, C#, Kotlin, TypeScript, React & Rust. And I intend to learn more and more.
          </p>
        </>
      </SiteContainer>
    );
  };

  if (siteLang.siteLang === "NL") return <AboutMeNL />;
  else return <AboutMeEN />;
}

export default AboutMe;
