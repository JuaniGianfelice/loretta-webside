import "./accordion.scss";

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  
  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");
  
    title.addEventListener("click", () => {
      content.classList.toggle("active");
    });
  });
});

const Accordion = () => {

  return (

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-title">Bicho Raro</div>
        <div class="accordion-content">
          <p>
            Donde todos nadan <br/>
            Voy al otro lado <br/>
            Estoy desubicado <br/>
            Me siento como pez en aviario <br/><br/>
            A veces me pregunto<br/>
            Rumbo a dónde vamos?<br/>
            Siguen la corriente<br/>
            Me perciben como demente <br/><br/>
            EPIC PIANO SOLO<br/><br/>
            Distintas decisiones <br/>
            Distintas ambiciones <br/>
            Me dicen bicho raro <br/>
            Pero ellos son los extraños <br/><br/>
            Nunca me identifiqué <br/>
            En este lugar <br/>
            Aunque muchas veces <br/>
            La tuve que dudar <br/><br/>
            Si tengo que seguir <br/>
            A toda esta gente <br/>
            La verdad que siempre <br/>
            Me gustó ser diferente <br/>
            <br/>
            EPIC GUITAR SOLO<br/>
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">Caminos Cruzados</div>
        <div class="accordion-content">
          <p>
            Un déjà vu se me ha cruzado <br/>
            De este camino empedrado <br/>
            Positivos recuerdos vagos <br/>
            Que me sientan mal <br/> <br/>
            Esta vía es de un solo sentido <br/>
            ¿Alguna vez habré venido? <br/>
            De a poco se va asimilando <br/>
            Ese cartel señalizado <br/> <br/>
            Unos señores me han advertido <br/>
            Los peligros de este recorrido <br/>
            Sin embargo me siento a gusto <br/>
            Aunque todavía no sé qué busco <br/> <br/>
            Sufro un escalofrío <br/>
            Lo pasado cobra sentido <br/>
            Si algo te puedo recomendar <br/>
            Es que munca camines atrás <br/> <br/>
            Con todo este tiempo perdido <br/>
            Recuerdo como es el camino <br/>
            Tantas veces lo he transitado <br/>
            Lo hago con los ojos cerrados <br/> <br/>
            Encontrar algo diferente <br/>
            Espero con viajes frecuentes <br/>
            Ahora mismo estoy regresando <br/>
            En busca de nuevos rastros <br/> <br/>
            Sufro un escalofrío <br/>
            Lo pasado cobra sentido <br/>
            Si algo te puedo recomendar <br/>
            Es que munca camines atrás.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">Caretas</div>
        <div class="accordion-content">
          <p>
            Separarte de la multitud <br/>
            No te hace mas interesante <br/>
            Aunque a veces parezca mejor <br/><br/>
            No te quejes de la monotonia <br/>
            No te quejes de su hipocresia <br/>
            Que no importe lo que diga el monton <br/><br/>
            Al final nadie tiene la razon <br/><br/>
            Esperar, un igual a vos <br/>
            Disfrutar, de lo que toco <br/>
            Aguantar, es mejor de a dos <br/>
            Lo popular, no juega con vos <br/><br/>
            Los caretas te quieren definir <br/>
            Vos sabes siempre lo que elegis <br/>
            Si no les gusta que se vayan de aca <br/><br/>
            Esperar, un igual a vos <br/>
            Disfrutar, de lo que toco <br/>
            Aguantar, es mejor de a dos <br/>
            Lo popular, no juega con vos.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">Como Estas?</div>
        <div class="accordion-content">
          <p>
            Un mundo lleno de dudas <br/>
            Y me pregunto <br/>
            Como estas? <br/>
            No quiero que llores nunca mas <br/><br/>
            Quiero que dejes de pensar <br/>
            Que dejes de dudar, <br/>
            De ir a las montañas <br/>
            Y que empieces a caminar <br/><br/>
            Da lo mejor de vos siendo vos, <br/>
            El tiempo corre <br/>
            Y vos seguis rompiendote en vos <br/>
            Ya no soporto otro adios <br/><br/>
            Dias y noches comienzan a mezclarse <br/>
            Las manos de este extraño empienzan a llevarte <br/>
            No necesito decepcionarte <br/>
            Comienzo a pensarte <br/>
            Amenazas de muerte <br/>
            No seas persistente <br/><br/>
            Da lo mejor de vos siendo vos <br/>
            El tiempo corre <br/>
            Y vos seguis rompiendote en dos <br/>
            Ya no soporto otro adios <br/><br/>
            Viendote llorar <br/>
            Y me pregunto <br/>
            Como estas?
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">Con Maquillaje</div>
        <div class="accordion-content">
          <p>
            A veces me pregunto <br/>
            ¿Por qué nos cuesta tanto? <br/>
            Ir de frente, decir la verdad <br/>
            No es sano vivir escapando <br/>
            <br/>
            Aprendimos a poner excusas <br/>
            Somos cómplices de la mentira <br/>
            De cada situación <br/>
            Buscamos siempre la huida <br/>
            <br/>
            Te pasas los días <br/>
            Maquillando sentimientos <br/>
            Los quisiste ocultar <br/>
            Tus demonios van a escapar <br/>
            <br/>
            La verdad no es posible <br/>
            Ocultarla al munto entero <br/>
            Tarde o temprano <br/>
            Siempre terminas perdiendo <br/>
            <br/>
            Te acostumbraste a pintar <br/>
            Todo con maquillaje <br/>
            No entiendo cómo no te pesa <br/>
            Todo ese equipaje <br/>
            <br/>
            Te pasas los días <br/>
            Maquillando sentimientos <br/>
            Los quisiste ocultar <br/>
            Tus demonios van a escapar
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">FelIcidad</div>
        <div class="accordion-content">
          <p>
            Conoci a alguien muy especial <br/>
            No la puedo ver<br/>
            Para ella es como jugar<br/>
            La busco adentro y no esta<br/>
            <br/>
            Tuvimos pequeños encuentros<br/>
            En ellos me senti completo<br/>
            Pero otras me distraen<br/>
            Nublando mis sentimientos<br/>
            <br/>
            A veces esta y cuando no<br/>
            La busco en mi soledad<br/>
            Y si la encuentro<br/>
            Todo se transformara<br/>
            <br/>
            A veces esta y cuando no<br/>
            La busco en mi soledad<br/>
            Y si la encuentro<br/>
            Todo se transformara<br/>
            <br/>
            Crei haberla perdido<br/>
            Me senti al borde del abismo<br/>
            Al final siempre estuvo<br/>
            Dentro de mi mismo<br/>
            <br/>
            A veces esta y cuando no<br/>
            La busco en mi soledad<br/>
            Y si la encuentro<br/>
            Todo se transformara<br/>
            <br/>
            A veces esta y cuando no<br/>
            La busco en mi soledad<br/>
            Y si la encuentro<br/>
            Todo se transformara<br/>
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">Funky Vol. 1</div>
        <div class="accordion-content">
          <p>
            ~ ATENCION ~ <br/>
            La siguiente cancion solo puede ser entendida por bajistas, intentar comprender su significado puede traer efectos secundarios de los cuales los miembros de Loretta no se hacen responsables; <br/>
            <br />
            QUEDA USTED AVISADO <br/>
            <br/>
            Intro BassLine <br/>
            BassLine A (With a cool SLAP) <br/>
            BassLine Transition <br/>
            BassLine B (Super Nice) <br/>
            <br/>
            EPIC BASS SOLO <br/><br/>
            BassLine B (Super Nice) <br/>
            BassLine Transition <br/>
            BassLine A (With a Guitar Solo, but no bass) <br/> <br />
            THE END ? . . .
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">OlAs</div>
        <div class="accordion-content">
          <p>
            La ventana refleja el oceano <br/>
            Tan pacifico y profundo <br/>
            Me gustaria volverme a mojar <br/>
            Pero me ahogo si vuelvo a entrar <br/>
            <br/>
            Si de mi te acordas <br/>
            No voy a volverme a equivocar <br/>
            Si todavia estas <br/>
            Aunque pase el tiempo voy a esperar <br/>
            <br/>
            Cerre los ojos, no se lo que es <br/>
            Sueño algun dia volver a bucear <br/>
            Me gustaria volverme a mojar <br/>
            Pero me ahogo si vuelvo a entrar <br/>
            <br/>
            Si de mi te acordas <br/>
            No voy a volverme a equivocar <br/>
            Si todavia estas <br/>
            Aunque pase el tiempo voy a esperar <br/>
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-title">Sin Rumbo</div>
        <div class="accordion-content">
          <p>
            Sali a caminar <br/>
            Es mi tiempo de despejar <br/>
            La ciudad ya duerme <br/>
            <br/>
            Nadie puede verme <br/>
            No debo esconderme <br/>
            Voy firme no me tumbo <br/>
            Camino sin rumbo <br/>
            <br/>
            Desde las ventanas <br/>
            Ojos me miran <br/>
            No logro esquivarlos <br/>
            Pero sigo en la mia <br/>
            <br/>
            Otro viaje mas <br/>
            // Y ya no hay vuelta atras // <br/>
            Yo ya despegue <br/>
            // A donde quiero estar // <br/>
            Ese es el lugar <br/>
            // Y ya voy a llegar //<br/>
            <br/>
            ~ INSTRUMENTAL ~ <br/>
            <br/>
            Otro viaje mas <br/>
            // Y ya no hay vuelta atras //<br/>
            Yo ya despegue <br/>
            // A donde quiero estar //<br/>
            Ese es el lugar <br/>
            // Y ya voy a llegar //
          </p>
        </div>
      </div>
    </div>

  );
}

export default Accordion