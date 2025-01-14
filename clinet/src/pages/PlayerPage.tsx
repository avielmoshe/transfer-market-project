import NavSearch from "@/components/NavSearch";
import { DataForNavSearch } from "@/types/types";
import { useNavigate, useParams } from "react-router-dom";

function PlayerPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dataOfNavSearch: DataForNavSearch = [
    { name: "PROFILE", onClick: () => { navigate(`/playerProfile/Profile/${id}`); }},
    { name: "STATS", onClick: () => { navigate(`/playerProfile/Stats/${id}`); }},
    { name: "MARKET VALUES", onClick: () => { navigate(`/playerProfile/MarketValues/${id}`); }},
    { name: "TRANSFERS", onClick: () => { navigate(`/playerProfile/Transfers/${id}`); }},
    { name: "RUMOURS", onClick: () => { navigate(`/playerProfile/Rumours/${id}`); }},
    { name: "NATIONAL TEAM", onClick: () => { navigate(`/playerProfile/NationalTeam/${id}`); }},
    { name: "NEWS", onClick: () => { navigate(`/playerProfile/News/${id}`); }},
    { name: "ACHIEVEMENTS", onClick: () => { navigate(`/playerProfile/Achievements/${id}`); }},
    { name: "CAREER", onClick: () => { navigate(`/playerProfile/Career/${id}`); }},
  ];
  return (
    <>
      <NavSearch dataOfNavSearch={dataOfNavSearch} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet ab
      inventore quasi quia animi fugiat eius quae soluta est quam vero maxime,
      aut ipsum voluptas laboriosam voluptatem, unde commodi? Incidunt
      accusantium esse temporibus repudiandae necessitatibus maxime rem iste
      aliquam alias itaque unde dolorum enim quisquam vel dicta neque nobis
      porro, sequi ducimus quo ex libero. Maxime nisi ullam quia? Distinctio
      quis modi inventore voluptatem eveniet nisi magni alias, et, corporis
      neque officiis a, sit suscipit aperiam ea cupiditate explicabo officia
      ullam exercitationem fugit delectus laudantium sequi. Id, nostrum
      obcaecati! Incidunt, soluta tempora? Nihil libero vitae corporis.
      Praesentium quo rerum unde recusandae doloribus dolorum adipisci nobis,
      sint perspiciatis voluptatum officia. Repellendus saepe ipsa voluptatum
      voluptatem eos magni repellat libero architecto. Nam, commodi, in facere
      officia tenetur cumque dicta quos numquam beatae rem obcaecati expedita
      suscipit voluptates sapiente enim illo hic at id inventore dolore? Facilis
      debitis laudantium repellat sed nihil. Magni dicta illo pariatur tempore
      tempora. At quos, a, unde dolor, laudantium eos reprehenderit vitae
      tempore impedit porro facere natus modi nihil eaque dicta rem pariatur
      cumque expedita similique esse! Quo architecto ut incidunt commodi velit
      nihil blanditiis. Quas facere minus omnis, eius amet eveniet laudantium
      praesentium impedit, molestias rem quibusdam adipisci nulla voluptates
      exercitationem nesciunt commodi deleniti voluptatem ducimus! Error odit
      doloribus consectetur asperiores a maiores et, beatae exercitationem amet
      assumenda totam quas, nobis itaque? Illum, ipsam! Quas ea velit sapiente
      quia necessitatibus possimus obcaecati magnam, voluptatem nesciunt aut.
      Illum dolores aliquid rem tenetur vel dolorem eveniet et! Nihil
      dignissimos iste odio consequuntur esse libero, quis dolorem architecto,
      est suscipit, excepturi magni expedita doloremque optio reiciendis dolorum
      cum corrupti. Quo unde amet, facere reprehenderit nisi quas. Maiores
      voluptatum quam aperiam recusandae, mollitia a, hic inventore nihil
      repudiandae voluptates officia temporibus ipsam asperiores beatae ipsum,
      sit id quo fugiat eaque. Vel voluptates, beatae illum, tenetur quidem
      earum recusandae sapiente nisi nulla necessitatibus sequi consequuntur
      doloribus commodi at dignissimos ipsa enim corporis officia sint esse
      saepe? Temporibus, placeat! Fuga, explicabo et. Libero ab aperiam maiores
      rerum impedit laborum architecto, nisi fuga quis, modi hic voluptates, rem
      commodi consectetur! Quaerat nemo obcaecati veritatis fugit. Labore dolor
      est cum illum aliquid quam maxime! Neque excepturi consectetur sint, nobis
      eius deleniti necessitatibus dolor debitis earum dicta, non, amet corrupti
      beatae id iusto enim error sequi velit labore consequuntur vel soluta
      explicabo. Odio, reprehenderit quisquam? Harum voluptatum vero libero
      placeat veniam consectetur. Repudiandae tenetur quas officiis adipisci
      magnam, provident, cupiditate placeat dignissimos esse architecto
      consectetur, deleniti voluptas eius! Odit molestias voluptate perferendis
      velit. Minus, numquam! Officiis quae error, quos rem, quaerat dicta
      suscipit voluptas corporis nobis commodi eius quidem deleniti. Asperiores
      quibusdam necessitatibus illo laborum, vitae mollitia officiis fugiat
      earum vel eius maiores culpa rem. Fuga sed architecto saepe commodi
      molestiae doloribus laudantium aut hic nihil neque et quod, dolorum autem
      magni nisi corporis atque placeat? Deleniti, id? Voluptatibus vero
      repellendus omnis nam corporis voluptatem? Consequatur deserunt voluptatum
      facilis commodi doloribus et sit voluptatem laudantium explicabo ducimus
      similique reiciendis, libero nisi, qui eaque, blanditiis sequi. Quaerat et
      non, deserunt maxime ipsam fugit porro doloremque quisquam! Necessitatibus
      quas nemo praesentium tempore ullam porro quisquam! Debitis id amet
      inventore iste quia voluptatibus totam, facere a consequatur earum sit
      nihil, voluptatum molestias! Inventore iusto quae eligendi esse sit.
      Deserunt soluta saepe accusamus fugiat explicabo molestiae, cumque
      inventore recusandae itaque vero. Repudiandae recusandae eligendi ipsa
      distinctio molestias accusantium doloribus voluptate. Officia incidunt
      eligendi mollitia fugit ducimus quis sapiente vitae! Illo accusantium
      exercitationem molestiae ipsum dolorum, voluptatibus error, delectus
      labore reiciendis nobis similique, molestias sequi. Corrupti nesciunt
      optio officiis labore qui architecto, harum nemo tenetur quasi
      perspiciatis. Corrupti, ab quaerat.
    </>
  );
}

export default PlayerPage;
