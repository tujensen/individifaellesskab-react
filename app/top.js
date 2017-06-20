var React = require('react');

class Top extends React.Component {
  render() {
    return (
      <div className={'top'}>
        <div className={'bytext'}>
          <a href="https://www.facebook.com/individifaellesskab" target="_blank">Facebook gruppe</a>
        </div>
        <br/>

        <p>På denne side finder du to digte under udarbejdelse. Digtene bliver
          skrevet fortløbende af et kollektiv bestående af netjournalister hos
          dr.dk, tv2.dk, eb.dk, b.dk, bt.dk, jp.dk, information.dk og pol.dk.
          Digtene bliver redigeret af en robot. Robotten afsøger løbende
          nyhedsmediernes RSS-feeds, og udvælger alle de overskrifter, der starter
          med "Vi" og "Jeg". Disse linjer skriver den til i toppen af nedenstående
          "Vi"- og "Jeg"-digte. Digtene vil således blive længere, så længe de
          respektive nyhedsmedier bliver ved med at fodre robotten med overskrifter.
          Digtene opdateres hvert 5. min. med de overskrifter, som de respektive
          nyhedskanaler har produceret i mellemtiden. Skulle man ønske at efterprøve
          linjernes autenticitet, så kan man holde musen over en linje for at se
          kilden.</p>

        <p>Der er således ingen menneskelig redigering. Robotten derimod tager sig
          tre redigeringsfriheder:</p>
        <ol>
          <li>Den fjerner alt hvad der måtte stå før et kolon, så Vi'et og Jeg'et
            bliver isoleret fra deres oprindelige afsendere. Eks. " Miley Cyrus: Jeg
            er enten kedelig eller en luder" bliver i digtet reduceret til: "Jeg er
            enten kedelig eller en luder". Således får Vi'et og Jeg'et lov at stå
            som fællessubjekter.
          </li>
          <li>Robotten går udenom al sport, da sportsartikler indeholder mange
            egennavne, og da sportsartikler oftest handler om hold og spilleres
            forventninger i forhold til at slå andre hold og spillere. Hvilket
            resulterer i nogle forholdsvis uinteressante udsagn i konteksten.
          </li>
          <li>Grundet nyhedsmediernes flittige brug af Ritzau, Reuters og deslige,
            så tjekker robotten om den allerede har skrevet pågældende linje til
            indenfor de sidste 24 timer. Hvis det er tilfældet, så gentager den
            ikke.
          </li>
        </ol>
        <p>En tak skal lyde til den danske journaliststand for deres poetiske
          udladninger. Vi glæder os til at følge jeres fortsatte afsøgning af
          begreberne: Individ og fællesskab.</p>

        <div className={'bytext'}>- Christoffer Ugilt Jensen og Troels Ugilt Jensen</div>
      </div>
    )
  }
}

module.exports = Top;
