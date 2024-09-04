import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CursorContext } from "../Cursor/CursorProvider";
import { StyledLogo } from "./Styles/StyledLogo";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const { setCursorType } = useContext(CursorContext);
  const pathname = usePathname();

  return (
    <StyledLogo
      onMouseEnter={() => setCursorType("hover")}
      onMouseLeave={() => setCursorType("normal")}
    >
      <Link href={"/"}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='257'
          height='78'
          viewBox='0 0 257 78'
        >
          <g
            id='Group_8571'
            data-name='Group 8571'
            transform='translate(-187 -30)'
          >
            <g id='Group_8570' data-name='Group 8570'>
              <g
                id='Rectangle_1940'
                data-name='Rectangle 1940'
                transform='translate(187 30)'
                stroke='#000'
                strokeWidth='1'
              >
                <rect width='184' height='78' rx='20' stroke='none' />
                <rect x='1' y='1' width='182' height='76' rx='19' fill='none' />
              </g>
              <g
                id='Rectangle_1941'
                data-name='Rectangle 1941'
                transform='translate(369 30)'
                fill='#fff'
                stroke='#000'
                strokeWidth='1'
              >
                <rect width='75' height='78' rx='20' stroke='none' />
                <rect
                  x='1'
                  y='1'
                  width='73'
                  height='76'
                  rx='19'
                  fill='none'
                  vectorEffect={"non-scaling-stroke"}
                />
              </g>

              {pathname === "/apparel" && false ? (
                <g transform='translate(386.174 41.016)'>
                  <path
                    d='M13.33203,42.42194c1.55176,1.66992,3.6543,2.71875,5.9209,2.95215l.17773.01758v-4.97363h-.16113c-2.45703.01953-4.79883.11035-6.96289.27051l-.26367.0188c.02563.04327.04785.08899.07397.13184l.0647.10132c.33398.52344.72168,1.02148,1.15039,1.48145Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M19.26758,39.00104h.16309v-3.25195h-8.87878c.073,1.2724.35193,2.48328.80969,3.59277l.09351-.00781c2.43164-.19922,5.06055-.31152,7.8125-.33301Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M10.48242,40.8399l-.10449.00879c-1.63867.16016-3.13867.36035-4.45801.59668l-.40332.07324.3457.22363c.32422.21094.60449.38379.88574.54004,2.03711,1.11523,4.22656,1.92285,6.50488,2.40039l.61353.13153c-.896-.66949-1.69238-1.4787-2.36792-2.39691-.13184-.17505-.25317-.35583-.37476-.5379-.08154-.12451-.15967-.25092-.23669-.37885-.1156-.18835-.24646-.36725-.35095-.56201l-.05371-.09863Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M28.82043,42.36749c-.69373.95282-1.51453,1.79236-2.44348,2.47968l.64746-.15668c1.26855-.27441,2.52344-.64551,3.73047-1.10352,1.2793-.48145,2.50977-1.10059,3.65918-1.84082l.34375-.22363-.99316-.17676c-1.13965-.18848-2.43945-.35352-3.86133-.49121l-.1084-.01074-.05078.09375c-.08862.16418-.2002.31378-.29639.47339-.1106.18744-.22498.37115-.34497.55133-.0929.13641-.18384.27289-.28235.40521Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <rect
                    x='13.69336'
                    y='10.38379'
                    width='12.90674'
                    height='1.5127'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M21.01465,40.41803h-.16309l-.00098,4.97363.17871-.01758c2.26465-.2334,4.36719-1.28223,5.91797-2.95117.43164-.45898.82031-.95703,1.15625-1.48242l.0531-.08221c.02991-.04871.05505-.10089.08411-.15015l-.26221-.01959c-2.20996-.16211-4.55273-.25293-6.96387-.27051Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M20.84961,39.00104h.15918c2.73438.01953,5.36328.12988,7.81445.3291l.10083.00842c.45789-1.11084.73633-2.3233.80859-3.59729h-8.88306v3.25977Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M25.59766,28.66681c-.44507,0-.85718-.13068-1.21338-.34479-.38379.79315-1.18958,1.34576-2.12842,1.34576-.65149,0-1.24194-.2644-1.6709-.69104-.42896.42664-1.01941.69104-1.6709.69104-.93884,0-1.74463-.55261-2.12842-1.34576-.3562.21411-.76831.34479-1.21338.34479-.85938,0-1.6062-.46387-2.02197-1.14978-1.69922,1.73932-2.8125,4.13617-2.99316,6.81506h8.87744v-.00391h10.29224c-.16406-2.42261-1.09204-4.61292-2.52563-6.29675-.42285.39087-.9834.63538-1.60352.63538Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M31.17676,35.89459c-.06836,1.15527-.30078,2.2959-.69141,3.38867l-.07129.20117.20801.02148c1.91504.2041,3.57422.45117,4.93164.73438.1582.0332.30469.06738.4502.10156l.20215.04785.06348-.05957c.44238-.40625.85156-.85645,1.2168-1.33887.68945-.89258,1.14551-1.94922,1.32227-3.05859l.02734-.18359h-7.65137l-.00781.14551Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M9.66211,39.50201l.20801-.02051-.07129-.2002c-.38867-1.09082-.62207-2.23047-.69336-3.38672l-.00879-.15332H1.44824l.02539.18652c.17676,1.10938.63379,2.16504,1.32227,3.05273.36621.48535.77734.93652,1.22266,1.34473l.06543.06055.08594-.01953c.6416-.14844,1.35352-.28906,2.11328-.41602.9873-.16309,2.12402-.31445,3.37891-.44824Z'
                    fill='none'
                    strokeWidth='0'
                  />
                  <path
                    d='M40.20398,34.32819h-1.38684l.00122.00684h-7.63867l-.00049-.00684h-.05249c.0155.25555.03638.50964.03638.76929,0,2.3222-.63501,4.48376-1.71533,6.31348.09619-.15961.20776-.3092.29639-.47339l.05078-.09375.1084.01074c1.42188.1377,2.72168.30273,3.86133.49121l.99316.17676-.34375.22363c-1.14941.74023-2.37988,1.35938-3.65918,1.84082-1.20703.45801-2.46191.8291-3.73047,1.10352l-.64746.15668c-1.3877,1.02679-3.00537,1.71198-4.75024,1.966,4.38159-.13831,8.70923-1.25525,12.60083-3.2887,1.71094-.91895,3.18555-2.15918,4.38477-3.68555,1.04688-1.33691,1.64062-3.00781,1.67188-4.71484-.00488-.26727-.04773-.53107-.0802-.7959ZM38.80859,35.93268c-.17676,1.10938-.63281,2.16602-1.32227,3.05859-.36523.48242-.77441.93262-1.2168,1.33887l-.06348.05957-.20215-.04785c-.14551-.03418-.29199-.06836-.4502-.10156-1.35742-.2832-3.0166-.53027-4.93164-.73438l-.20801-.02148.07129-.20117c.39062-1.09277.62305-2.2334.69141-3.38867l.00781-.14551h7.65137l-.02734.18359Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M19.43457,34.32819v.00391h-8.87744c-.01709.25366-.03564.50702-.03564.76538,0,.21997.01794.435.0304.65161h8.87878v3.25195h-.16309c-2.75195.02148-5.38086.13379-7.8125.33301l-.09351.00781c.19604.4754.42456.93073.6814,1.36548l.26367-.0188c2.16406-.16016,4.50586-.25098,6.96289-.27051h.16113v4.97363l-.17773-.01758c-2.2666-.2334-4.36914-1.28223-5.9209-2.95215-.42871-.45996-.81641-.95801-1.15039-1.48145l-.0647-.10132c1.72339,2.82465,4.67542,4.69385,8.02563,4.69385,3.34229,0,6.28906-1.86053,8.01404-4.67474l-.0531.08221c-.33594.52539-.72461,1.02344-1.15625,1.48242-1.55078,1.66895-3.65332,2.71777-5.91797,2.95117l-.17871.01758.00098-4.97363h.16309c2.41113.01758,4.75391.1084,6.96387.27051l.26221.01959c.25769-.43604.48682-.8927.68335-1.36957l-.10083-.00842c-2.45117-.19922-5.08008-.30957-7.81445-.3291h-.15918v-3.25977h8.88306c.01221-.21405.03003-.42651.03003-.6438,0-.25964-.01855-.51434-.03589-.76929h-10.29224Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M28.82043,42.36749c.09851-.13232.18945-.2688.28235-.40521-.09155.13727-.18567.27234-.28235.40521Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M13.25293,44.68268c-2.27832-.47754-4.46777-1.28516-6.50488-2.40039-.28125-.15625-.56152-.3291-.88574-.54004l-.3457-.22363.40332-.07324c1.31934-.23633,2.81934-.43652,4.45801-.59668l.10449-.00879.05371.09863c.10449.19476.23535.37366.35095.56201-1.11255-1.84808-1.76599-4.0434-1.76599-6.40308,0-.25964.02087-.51373.03638-.76929h-.0498l-.00024.00293H1.47266l.00049-.00293H.08032c-.03271.26794-.07544.53473-.08032.80566.03027,1.69629.62305,3.36816,1.67383,4.70996,1.93848,2.33984,4.48242,4.09277,7.35156,5.06738,3.11682,1.14343,6.36011,1.79193,9.66357,1.90704-1.77466-.25287-3.41724-.95398-4.82251-2.00403l-.61353-.13153ZM4.08398,40.3858l-.06543-.06055c-.44531-.4082-.85645-.85938-1.22266-1.34473-.68848-.8877-1.14551-1.94336-1.32227-3.05273l-.02539-.18652h7.64844l.00879.15332c.07129,1.15625.30469,2.2959.69336,3.38672l.07129.2002-.20801.02051c-1.25488.13379-2.3916.28516-3.37891.44824-.75977.12695-1.47168.26758-2.11328.41602l-.08594.01953Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M11.12378,41.87939c.12158.18207.24292.36285.37476.5379-.12927-.1756-.25488-.35443-.37476-.5379Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M28.94043,39.3399l.04492-.11133c.43164-1.05859.68945-2.17285.76855-3.3125l.0127-.1748h-.03394c-.07227,1.27399-.35071,2.48645-.80859,3.59729l.01636.00134Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M27.20117,28.03143c1.43359,1.68384,2.36157,3.87415,2.52563,6.29675h1.3999c-.17847-2.95911-1.36133-5.62878-3.20142-7.60205-.09473.51306-.35571.96472-.72412,1.3053Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M12.0332,40.70807l.08374.1311c-.02612-.04285-.04834-.08856-.07397-.13184l-.00977.00073Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M10.51367,35.74908l.00977.1709c.0791,1.13867.33789,2.25391.76953,3.3125l.04492.11133.02368-.00195c-.45776-1.1095-.73669-2.32037-.80969-3.59277h-.03821Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M29.44775,41.41095c-.11194.18585-.2229.37213-.34497.55133.12-.18018.23438-.36389.34497-.55133Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M28.25293,40.70905l-.01221-.00092c-.02905.04926-.0542.10144-.08411.15015l.09631-.14923Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M28.82043,42.36749c-.26367.35419-.53894.70007-.84094,1.02222-.33789.35938-.70605.70117-1.09375,1.01465l-.7168.49316.20801-.05035c.92896-.68732,1.74976-1.52686,2.44348-2.47968Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M13.86646,44.81421l.13354.02863-.59668-.42969c-.39355-.32031-.75977-.66016-1.10156-1.02051-.28931-.30798-.55005-.63916-.80322-.97534.67554.91821,1.47192,1.72742,2.36792,2.39691Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M10.52441,34.33209h.03271c.18066-2.67889,1.29395-5.07574,2.99316-6.81506-.21704-.35779-.34912-.77271-.34912-1.22083v-.38092c-2.31226,2.01965-3.83936,5.02466-4.0437,8.4129h1.36731l-.00037.00391Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <polygon
                    points='20.14136 46.58551 20.1416 46.6192 20.14233 46.58551 20.1416 46.58551 20.14136 46.58551'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M10.88708,41.50055c.07703.12793.15515.25433.23669.37885-.08276-.1239-.15881-.25183-.23669-.37885Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M20.14062,46.83502c-.48511.0061-.96899.00006-1.45166-.01678.47681.06793.95972.11517,1.45361.11517.50452,0,.99731-.04938,1.48413-.12024-.30469.00964-.60889.02771-.91382.02771-.19141,0-.38184-.00195-.57227-.00586Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M26.16895,44.89752l.7168-.49316c.3877-.31348.75586-.65527,1.09375-1.01465.302-.32214.57727-.66803.84094-1.02222.09668-.13287.1908-.26794.28235-.40521.12207-.1792.23303-.36548.34497-.55133,1.08032-1.82971,1.71533-3.99127,1.71533-6.31348,0-.25964-.02087-.51373-.03638-.76929h-1.3999c.01733.25494.03589.50964.03589.76929,0,.21729-.01782.42975-.03003.6438h.03394l-.0127.1748c-.0791,1.13965-.33691,2.25391-.76855,3.3125l-.04492.11133-.01636-.00134c-.19653.47687-.42566.93353-.68335,1.36957l.01221.00092-.09631.14923c-1.72498,2.81421-4.67175,4.67474-8.01404,4.67474-3.35022,0-6.30225-1.8692-8.02563-4.69385l-.08374-.1311.00977-.00073c-.25684-.43475-.48535-.89008-.6814-1.36548l-.02368.00195-.04492-.11133c-.43164-1.05859-.69043-2.17383-.76953-3.3125l-.00977-.1709h.03821c-.01245-.21661-.0304-.43164-.0304-.65161,0-.25836.01855-.51172.03564-.76538h-.03271l.00037-.00391h-1.36731c-.0155.25555-.03638.50964-.03638.76929,0,2.35968.65344,4.55499,1.76599,6.40308.07788.12701.15393.25494.23669.37885.11987.18347.24548.3623.37476.5379.25317.33618.51392.66736.80322.97534.3418.36035.70801.7002,1.10156,1.02051l.59668.42969-.13354-.02863c1.40527,1.05005,3.04785,1.75116,4.82251,2.00403.48267.01685.96655.02289,1.45166.01678.19043.00391.38086.00586.57227.00586.30493,0,.60913-.01807.91382-.02771,1.74487-.25403,3.36255-.93921,4.75024-1.966l-.20801.05035ZM20.1416,46.6192l-.00024-.03369h.00098l-.00073.03369Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M24.59375,27.62415c-.03455.24725-.10449.48102-.20947.69788.3562.21411.76831.34479,1.21338.34479.62012,0,1.18066-.24451,1.60352-.63538-.15112-.17749-.30627-.34973-.46826-.5155-.29834.27771-.69531.45117-1.13513.45117-.37854,0-.72375-.13074-1.00403-.34296Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M27.2688,26.29614c0,.48309-.20801.91473-.53589,1.21979.16199.16577.31714.33801.46826.5155.36841-.34058.62939-.79224.72412-1.3053-.20935-.22443-.43115-.43506-.65649-.64093v.21094Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M25.59766,27.26642c-.53516,0-.9707-.43555-.9707-.97021v1.00049c0,.11212-.01807.21942-.0332.32745.28027.21222.62549.34296,1.00403.34296.43982,0,.83679-.17346,1.13513-.45117-.16553-.16943-.3313-.33826-.50757-.49475-.17017.14734-.38538.24524-.62769.24524Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M26.56836,25.50159c.24011.18604.47534.37793.70044.58362v-3.12842c-.20068.19977-.43909.36029-.70044.47839v2.06641Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M26.56836,26.2962c0,.2926-.13721.54688-.34302.72498.17627.15649.34204.32532.50757.49475.32788-.30505.53589-.73669.53589-1.21979v-.21094c-.2251-.20569-.46033-.39758-.70044-.58362v.79462Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.82446,27.85376c-.23047.64722-.84229,1.1134-1.5686,1.1134-.50122,0-.94556-.2251-1.25171-.57452-.11304.21436-.2489.41467-.41919.58411.42896.42664,1.01941.69104,1.6709.69104.93884,0,1.74463-.55261,2.12842-1.34576-.21094-.12683-.39819-.28436-.55981-.46826Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.92688,26.29614v1.00012c0,.19653-.04016.38232-.10242.5575.16162.1839.34888.34143.55981.46826.10498-.21686.17493-.45062.20947-.69788-.40271-.30505-.66687-.78375-.66687-1.328Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.92688,25.50598v.79016c0,.54425.26416,1.02295.66687,1.328.01514-.10803.0332-.21533.0332-.32745v-1.42432c-.22852-.13129-.46118-.25507-.70007-.36639Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.92688,23.99579c.23669.09338.47131.19043.70007.30048v-.64801h-.70007v.34753Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.92688,25.50598c.23889.11133.47156.23511.70007.36639v-1.57611c-.22876-.11005-.46338-.20709-.70007-.30048v1.51019Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.22656,27.29669c0,.53516-.43555.9707-.9707.9707s-.9707-.43555-.9707-.9707c0,.39746-.10754.7666-.28101,1.09595.30615.34943.75049.57452,1.25171.57452.72632,0,1.33813-.46619,1.5686-1.1134-.36743-.41766-.5979-.95892-.5979-1.55756v1.00049Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M23.22656,25.22192v1.07428c0,.59863.23047,1.13989.5979,1.55756.06226-.17517.10242-.36096.10242-.5575v-1.79028c-.22815-.10632-.4635-.19678-.70032-.28406Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M20.16577,28.39258c-.30627.34937-.75073.57458-1.25183.57458-.72632,0-1.33813-.46619-1.56848-1.1134-.16162.18384-.34888.34143-.55981.46826.38379.79315,1.18958,1.34576,2.12842,1.34576.65149,0,1.24194-.2644,1.6709-.69104-.17041-.16943-.30627-.36975-.41919-.58417Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M21.00415,28.39264c-.25781-.29401-.41919-.67468-.41919-1.09637,0,.42169-.16138.80231-.41919,1.09631.11292.21442.24878.41473.41919.58417.17029-.16943.30615-.36975.41919-.58411Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M21.28516,24.74249c-.23071-.02985-.46484-.04456-.7002-.05627v2.61005c0,.42169.16138.80237.41919,1.09637.17346-.32935.28101-.69849.28101-1.09595v-2.5542Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M18.91406,28.2674c-.53516,0-.9707-.43555-.9707-.9707v-1.00049c0,.59869-.23047,1.13989-.5979,1.55756.23035.64722.84216,1.1134,1.56848,1.1134.5011,0,.94556-.22522,1.25183-.57458-.17346-.32928-.28101-.69843-.28101-1.09589,0,.53516-.43555.9707-.9707.9707Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M20.14258,24.66193c-.08704,0-.17139.01166-.25781.01416v2.62061c0,.39746.10754.7666.28101,1.09589.25781-.29401.41919-.67462.41919-1.09631v-2.61005c-.14771-.00732-.29309-.02429-.44238-.02429Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M15.57227,28.66681c.44507,0,.85718-.13068,1.21338-.34479-.10498-.21686-.17493-.45068-.20947-.69794-.28027.21228-.62549.34302-1.00415.34302-.66492,0-1.23438-.39148-1.50342-.95386-.17993.15936-.34961.33099-.51831.50378.41577.68591,1.1626,1.14978,2.02197,1.14978Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M13.55029,27.51703c.1687-.17279.33838-.34442.51831-.50378-.10425-.21808-.16748-.45929-.16748-.7171v-.9433c-.24023.17798-.474.36511-.69995.56244v.38092c0,.44812.13208.86304.34912,1.22083Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M17.34546,27.85376c-.06226-.17517-.10242-.36096-.10242-.5575v-1.00012c0,.54425-.26416,1.02289-.66687,1.32794.03455.24725.10449.48108.20947.69794.21094-.12683.39819-.28442.55981-.46826Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M17.94336,24.94769c-.23608.06018-.47131.12201-.70032.20068v2.14789c0,.19653.04016.38232.10242.5575.36743-.41766.5979-.95886.5979-1.55756v-1.34851Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M15.57202,27.9671c.37866,0,.72388-.13074,1.00415-.34302-.01514-.10803-.0332-.21527-.0332-.32739v-1.00049c0,.53467-.43555.97021-.9707.97021-.44849,0-.8103-.31201-.92114-.72583-.1991.15076-.39478.3064-.58252.47266.26904.56238.8385.95386,1.50342.95386Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M14.60156,26.2962v-1.41339c-.23804.14954-.47412.30231-.70044.47003v.9433c0,.25781.06323.49902.16748.7171.18774-.16626.38342-.3219.58252-.47266-.02148-.07996-.04956-.15778-.04956-.24438Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M17.24304,26.29614v-1.14777c-.23816.08179-.47034.17749-.70007.27844v1.86987c0,.11212.01807.21936.0332.32739.40271-.30505.66687-.78369.66687-1.32794Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <polygon
                    points='27.2688 13.28223 26.56836 13.28223 26.56836 13.45837 27.2688 13.28223'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <rect
                    x='23.92688'
                    y='22.94794'
                    width='.70007'
                    height='.70032'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M27.96875,13.28223h-.69995l-.70044.17615v7.81879c0,.04932-.021.0918-.0282.13916-.07031.46661-.45667.83154-.9425.83154h-4.74023c-.09656,0-.18433-.02875-.27246-.05518-.37231-.11151-.64368-.43079-.68079-.82922.01526-.18512.05066-.36292.10608-.53369.05835-.10931.13379-.20392.22754-.28345.16919-.14362.38086-.23987.61963-.23987h.06335l.23547-.00006,2.07129-.00043c.03638-.00006.0675-.01538.10229-.02075.25708-.03949.46606-.20862.55103-.44745.02612-.07336.04688-.14966.04688-.23199,0-.38672-.31348-.7002-.7002-.7002-1.69336,0-2.88184-2.40479-2.88184-3.70654,0-.05939-.01978-.11237-.03369-.16742-.07678-.30353-.33911-.53278-.6665-.53278-.38672,0-.7002.31348-.7002.7002,0,1.1626.55859,2.66602,1.51855,3.73975-.32349.05426-.62048.18042-.88574.35199-.21216-.06244-.43201-.10638-.66406-.10638-.65149,0-1.24194.26453-1.6709.69122-.42896-.4267-1.01941-.69122-1.6709-.69122-.34668,0-.67358.07886-.9707.21307v-6.11523h-1.40039v12.63306c.22595-.19733.45972-.38446.69995-.56244.22632-.16772.4624-.3205.70044-.47003v-3.32733c0-.53516.43555-.9707.9707-.9707s.9707.43555.9707.9707v3.87134c.22974-.10095.46191-.19666.70007-.27844.229-.07867.46423-.1405.70032-.20068v-3.39221c0-.41663.26685-.76562.63623-.90302-.05518.2002-.09326.40729-.09326.62469,0,.85229.45618,1.59485,1.1333,2.01282.08545.0528.17285.10242.26514.14417v1.24194c.08643-.0025.17078-.01416.25781-.01416.14929,0,.29468.01697.44238.02429.23535.01172.46948.02643.7002.05627v-1.09424h1.94141v1.57367c.23682.08728.47217.17773.70032.28406v-2.55804h.70007v.70032h.9707c.34668,0,.67358-.07886.9707-.21307.26135-.1181.49976-.27863.70044-.47839v3.12842c.22534.20587.44714.4165.65649.64093.02576-.13983.04346-.28271.04346-.42993v-4.74072c0-.04767-.01123-.09222-.01416-.13916.00293-.04694.01416-.09149.01416-.13916v-7.99493Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M14.60156,13.28204v.00018h11.9668v-.00018c0-.38672.31348-.7002.7002-.7002s.7002.31348.7002.7002v.00018h.0166V.69043c-.00293-.38086-.31445-.69043-.69434-.69043h-.05176l-14.30566,6.12598c-.35449.03125-.63477.33008-.63477.69141v5.77441c.00195.38086.3125.69043.69238.69043h.20996v-.00018h1.40039ZM13.69336,10.38379h12.91016l-.00684,1.5127h-12.90332v-1.5127Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <rect
                    x='13.20117'
                    y='13.28204'
                    width='1.40039'
                    height='.00018'
                    fill='#000'
                    strokeWidth='0'
                  />
                  <path
                    d='M27.26855,12.58185c-.38672,0-.7002.31348-.7002.7002v.00018h1.40039v-.00018c0-.38672-.31348-.7002-.7002-.7002Z'
                    fill='#000'
                    strokeWidth='0'
                  />
                </g>
              ) : (
                <g
                  id='Group_6565'
                  data-name='Group 6565'
                  transform='translate(386.174 41.016)'
                >
                  <path
                    id='Path_14518'
                    data-name='Path 14518'
                    d='M30.392,32.486a31.234,31.234,0,0,1-11.03-1.909,16.152,16.152,0,0,1-7.245-4.992A7.609,7.609,0,0,1,10.5,21.029a7.6,7.6,0,0,1,1.617-4.553,13.742,13.742,0,0,1,4.307-3.621A28.925,28.925,0,0,1,30.392,9.574a31.3,31.3,0,0,1,11.029,1.909,16.141,16.141,0,0,1,7.245,4.993,7.613,7.613,0,0,1,1.619,4.553,7.623,7.623,0,0,1-1.619,4.556,13.747,13.747,0,0,1-4.306,3.62,28.925,28.925,0,0,1-13.967,3.281m.458-.917.453-.045a9.654,9.654,0,0,0,6.077-3.031,10.448,10.448,0,0,0,1.184-1.517l.377-.586-.695-.05c-2.208-.162-4.558-.254-6.98-.271l-.415,0Zm-1.332-5.5c-2.438.019-4.788.109-6.98.271l-.693.05.375.586A10.6,10.6,0,0,0,23.4,28.493a9.654,9.654,0,0,0,6.078,3.031l.453.045v-5.5Zm10.256.65a11.436,11.436,0,0,1-1.728,2.4,10.7,10.7,0,0,1-1.068.992l-1.825,1.254,2.068-.506.107-.024a26.349,26.349,0,0,0,3.765-1.114A19.583,19.583,0,0,0,44.8,27.857l.873-.568-.34-.062L44.059,27c-1.151-.19-2.457-.356-3.881-.494l-.273-.026ZM20.606,26.5c-1.664.162-3.171.365-4.48.6l-1.023.185.873.568c.33.214.615.389.9.549a23.949,23.949,0,0,0,6.576,2.426l.107.022,1.809.39L23.8,30.111a11.25,11.25,0,0,1-1.066-.99,11.418,11.418,0,0,1-1.728-2.4l-.131-.242Zm20.571-4.72A11.931,11.931,0,0,1,40.5,25.1l-.178.5.524.055c1.875.2,3.525.442,4.907.731.2.041.378.085.562.128l.214.05.161-.15a10.322,10.322,0,0,0,1.246-1.372,6.974,6.974,0,0,0,1.37-3.17l.069-.472H41.2Zm-29.7.085a6.953,6.953,0,0,0,1.372,3.169A10.208,10.208,0,0,0,14.1,26.41l.162.149.213-.048c.648-.15,1.356-.289,2.1-.413,1-.166,2.134-.316,3.364-.446l.524-.054-.178-.5a12.069,12.069,0,0,1-.679-3.319l-.024-.387H11.412Zm9.047-.029a11.014,11.014,0,0,0,.788,3.392l.114.28.3-.024c2.431-.2,5.054-.311,7.794-.332l.411,0V21.4H20.5ZM30.85,25.152l.409,0c2.754.019,5.375.131,7.794.328l.3.024.114-.28a10.952,10.952,0,0,0,.786-3.39l.033-.442H30.85Zm15.462-9.6c-.65.15-1.358.29-2.1.413-1.012.168-2.146.318-3.364.446l-.524.054.178.5a12.05,12.05,0,0,1,.667,3.139l.029.382h8.169l-.086-.486a7.06,7.06,0,0,0-1.344-2.97,10.248,10.248,0,0,0-1.246-1.374l-.161-.149Zm-7.258,1.025c-2.438.2-5.061.311-7.794.332l-.409,0v3.57h9.432l-.04-.449a11.016,11.016,0,0,0-.772-3.2l-.114-.28Zm-17.741.257a10.989,10.989,0,0,0-.771,3.2l-.041.449h9.434V16.908l-.409,0c-2.751-.019-5.372-.13-7.8-.328l-.3-.024Zm-7.2-1.194a10.119,10.119,0,0,0-1.258,1.386,7.017,7.017,0,0,0-1.344,2.97l-.086.486H19.59l.028-.382a12.022,12.022,0,0,1,.667-3.138l.178-.5-.524-.055c-1.873-.2-3.523-.442-4.905-.731-.187-.04-.363-.081-.537-.123l-.2-.047Zm15.372-5.1A9.663,9.663,0,0,0,23.4,13.567a10.4,10.4,0,0,0-1.182,1.517l-.377.584.693.052c2.208.162,4.558.254,6.98.271l.416,0v-5.5Zm1.368,5.456.415,0c2.441-.019,4.791-.109,6.982-.27l.693-.052-.377-.584a10.422,10.422,0,0,0-1.184-1.519A9.654,9.654,0,0,0,31.3,10.536l-.453-.043ZM36.9,11.881l.085.069a11.051,11.051,0,0,1,1.064.99,11.488,11.488,0,0,1,1.73,2.4l.13.242.273-.026c1.652-.161,3.157-.363,4.478-.6l1.021-.185-.869-.567c-.323-.211-.619-.392-.9-.551a24.039,24.039,0,0,0-6.578-2.426L35,10.656Zm-13.442-.657a26.623,26.623,0,0,0-3.767,1.114A19.616,19.616,0,0,0,15.982,14.2l-.871.567,1.076.2c.175.033.351.064.537.1,1.151.19,2.455.356,3.881.494l.273.026.13-.24a11.544,11.544,0,0,1,1.728-2.4,11.289,11.289,0,0,1,1.068-.992l.085-.069,2-1.185Z'
                    transform='translate(-10.5 -9.574)'
                    fill='#1b1b19'
                    stroke='#000'
                    strokeWidth='0.5'
                  />
                  <path
                    id='Path_14519'
                    data-name='Path 14519'
                    d='M35.581,43.472H34.99V32.1a2.114,2.114,0,0,0-3.435-1.631,2.079,2.079,0,0,0-.5-.781,2.117,2.117,0,0,0-2.97,0,2.234,2.234,0,0,0-.294.363c-.017-.019-.035-.036-.052-.054a2.13,2.13,0,0,0-2.692-.237l0-4.874a2,2,0,0,0-.622-1.444,2.094,2.094,0,0,0-3.58,1.486V55.812a.444.444,0,0,0,.444.442l14.3-6.123a.444.444,0,0,0,.442-.444V43.914a.443.443,0,0,0-.442-.442m-13.855.886H35.137v2.013H21.725Zm2.429-10.911a3.616,3.616,0,0,0-2.355,1c-.026.026-.05.052-.074.078V24.929a1.214,1.214,0,0,1,2.072-.854,1.13,1.13,0,0,1,.358.822Zm6.633,2.231a1.162,1.162,0,0,1-.344.84,1.191,1.191,0,0,1-.864.352,1.269,1.269,0,0,1-.287-.031,2.16,2.16,0,0,0,.361-1.222,2.018,2.018,0,0,0-.648-1.526,2.23,2.23,0,0,0-.648-.473V31.175a1.215,1.215,0,0,1,2.429,0Zm-2.415.89c-.014.014-.09.076-.09.076a1.2,1.2,0,0,1-.816.3H24.6a.444.444,0,0,0-.092.878c1.6.335,2.654,1.56,3.209,3.746a.444.444,0,0,0,.43.333.468.468,0,0,0,.109-.012.447.447,0,0,0,.321-.541,6.411,6.411,0,0,0-2.011-3.518h.9a2.057,2.057,0,0,0,1.128-.32,2.047,2.047,0,0,0,.985.242,2.077,2.077,0,0,0,1.491-.613,2.464,2.464,0,0,0,.168-.192,2.275,2.275,0,0,0,.173.2,2.022,2.022,0,0,0,1.484.608A2.052,2.052,0,0,0,34.1,37.38v6.092H21.725V36.733a2.377,2.377,0,0,1,.7-1.667,2.913,2.913,0,0,1,2.17-.748h2.868a1.864,1.864,0,0,1,.332.029,1.306,1.306,0,0,1,.584.375,1.169,1.169,0,0,1,.385.911,1.265,1.265,0,0,1-.4.935m5.731-.879A1.189,1.189,0,0,1,32.9,36.87a1.155,1.155,0,0,1-.854-.342,1.22,1.22,0,0,1-.368-.85V32.06a1.192,1.192,0,0,1,1.206-1.166A1.215,1.215,0,0,1,34.1,32.1Zm-7.855-5.411a1.156,1.156,0,0,1,.859.349,1.141,1.141,0,0,1,.365.8v2H25.043V31.443a1.141,1.141,0,0,1,.347-.817,1.156,1.156,0,0,1,.859-.349'
                    transform='translate(-2.975 0.077)'
                    fill='#1b1b19'
                    stroke='#000'
                    strokeWidth='0.5'
                  />
                </g>
              )}
              <g
                id='Group_6566'
                data-name='Group 6566'
                transform='translate(214.793 45.484)'
              >
                <path
                  id='Path_14520'
                  data-name='Path 14520'
                  d='M140.951,32.292c-3.194,0-3.671-1.557-3.671-2.484v-.194c0-.929.478-2.486,3.671-2.486h.437c3.149,0,3.619,1.566,3.619,2.5v.181c0,1.2-.959,2.484-3.645,2.484Zm.206-4.609c-2.734,0-3.1,1.023-3.1,2.022,0,.947.352,2.032,3.1,2.032s3.076-1.188,3.076-2.084c0-.917-.346-1.969-3.05-1.969Zm.9,3.3c.013,0-.012-.036-.012-.13v-.27c0-.337-.151-.488-.488-.488h-1.171v.888h-1.032V28.416h2.562c.752,0,1.135.2,1.135.593a.575.575,0,0,1-.529.542l0,.176c.357.064.57.261.57.53v.5a.6.6,0,0,0,.031.221Zm-1.671-1.418h1.223c.4,0,.436-.255.436-.333,0-.146-.076-.321-.436-.321h-1.223Z'
                  transform='translate(-16.132 -2.666)'
                  fill='#fff'
                />
                <path
                  id='Path_14521'
                  data-name='Path 14521'
                  d='M66.084,28.707c-6.547,0-9.892-1.78-9.944-5.291h6.29c.219,1.429,1.665,2.153,4.3,2.153,3.664,0,4.415-.7,4.415-1.763s-.593-1.644-3.731-1.7l-2.831-.058c-5.508-.142-8.3-1.722-8.3-4.7V17.17c0-2.186,1.111-4.694,9.768-4.694h1.18c6.386,0,9.642,1.571,9.678,4.672H70.7c-.255-1.106-1.574-1.621-4.143-1.621-3.04,0-4.064.363-4.064,1.438,0,1.1.97,1.53,3.585,1.587l2.831.058c7.225.146,8.6,1.772,8.6,4.724v.178c0,2.419-1.162,5.2-10.21,5.2Z'
                  transform='translate(-56.14 -9.89)'
                  fill='#fff'
                />
                <path
                  id='Path_14522'
                  data-name='Path 14522'
                  d='M91.275,28.706c-9.5,0-10.919-4.918-10.919-7.849v-.649c0-3.527,1.863-7.733,10.741-7.733h1.8c7.146,0,10.77,2.791,10.77,8.294V21.6H86.237l.064.311c.452,2.192,2.422,3.3,5.857,3.3,4.1,0,5.124-1.378,5.381-2.034h6.031c-.242,4.985-7.494,5.526-10.616,5.526Zm.678-13.063c-3.188,0-4.944.911-5.527,2.868l-.1.333h11.3l-.079-.321c-.469-1.911-2.34-2.88-5.559-2.88Z'
                  transform='translate(-44.2 -9.89)'
                  fill='#fff'
                />
                <path
                  id='Path_14523'
                  data-name='Path 14523'
                  d='M108.282,28.706c-9.5,0-10.917-4.918-10.917-7.849v-.649c0-3.527,1.863-7.733,10.74-7.733h1.8c7.146,0,10.771,2.791,10.771,8.294V21.6H103.246l.064.311c.452,2.192,2.422,3.3,5.856,3.3,4.094,0,5.124-1.378,5.381-2.034h6.032c-.242,4.985-7.5,5.526-10.616,5.526Zm.678-13.063c-3.186,0-4.944.911-5.527,2.868l-.1.333h11.3l-.079-.321c-.47-1.911-2.34-2.88-5.56-2.88Z'
                  transform='translate(-35.813 -9.89)'
                  fill='#fff'
                />
                <path
                  id='Path_14524'
                  data-name='Path 14524'
                  d='M114,28.119V24.677L125.31,16.53H114V12.772H133.36v3.291l-11.837,8.181h11.9v3.876Z'
                  transform='translate(-27.61 -9.744)'
                  fill='#fff'
                />
                <path
                  id='Path_14525'
                  data-name='Path 14525'
                  d='M131.27,33.663v-4.2h3.456c.681,0,1.026-.257,1.026-.76a3.466,3.466,0,0,0-.546-1.378l-7.6-14.553h6.484l5.269,11.086,5.117-11.086H150.5l-8.131,16.554c-1.551,3.162-3.07,4.337-5.606,4.337Z'
                  transform='translate(-20.902 -9.744)'
                  fill='#fff'
                />
                <path
                  id='Path_14526'
                  data-name='Path 14526'
                  d='M66.084,45.867c-6.547,0-9.892-1.78-9.944-5.291h6.29c.219,1.429,1.665,2.153,4.3,2.153,3.664,0,4.415-.7,4.415-1.763s-.593-1.644-3.731-1.7L64.588,39.2c-5.508-.142-8.3-1.722-8.3-4.7V34.33c0-2.186,1.111-4.694,9.768-4.694h1.18c6.386,0,9.642,1.571,9.678,4.672H70.7c-.255-1.106-1.574-1.621-4.143-1.621-3.04,0-4.064.363-4.064,1.438,0,1.1.97,1.53,3.585,1.587l2.831.058c7.225.146,8.6,1.772,8.6,4.724v.178c0,2.419-1.162,5.2-10.21,5.2Z'
                  transform='translate(-56.14 -1.429)'
                  fill='#fff'
                />
                <path
                  id='Path_14527'
                  data-name='Path 14527'
                  d='M77.943,46.279c-2.465,0-3.663-1.392-3.663-4.252V34.778h-3.1V30.932h3.1V27.9H80.25v3.028h3.125v3.846H80.25v6.01c0,.814.188,1.645,1.586,1.645h1.539v3.846Z'
                  transform='translate(-48.722 -2.283)'
                  fill='#fff'
                />
                <path
                  id='Path_14528'
                  data-name='Path 14528'
                  d='M88.509,45.633c-5.381,0-7.291-3.276-7.291-6.081v-9.62h6.117v7.585c0,2.677,1.578,4.212,4.328,4.212,2.977,0,4.978-1.835,4.978-4.566V29.932H102.7V45.279h-6V42.2l-.552.512a10.172,10.172,0,0,1-7.4,2.919Z'
                  transform='translate(-43.775 -1.283)'
                  fill='#fff'
                />
                <rect
                  id='Rectangle_609'
                  data-name='Rectangle 609'
                  width='6.057'
                  height='15.347'
                  transform='translate(89.329 28.682)'
                  fill='#fff'
                />
                <path
                  id='Path_14529'
                  data-name='Path 14529'
                  d='M107.288,47.183c-6.295,0-10.054-2.956-10.054-7.909v-.56c0-4.858,3.565-7.645,9.781-7.645h.487c2.364,0,5.677.424,8.045,2.443l.434.372V26.847h6.092V46.8h-6.092V43.953l-.411.532c-.723.933-3.3,2.7-7.886,2.7Zm2.071-12.473c-4.972,0-5.714,2.711-5.714,4.328v.118c0,2.169,1.786,4.357,5.775,4.357h.152c4.154,0,6.369-2.162,6.408-4.3v-.234c-.039-2.123-2.274-4.272-6.47-4.272Z'
                  transform='translate(-35.878 -2.804)'
                  fill='#fff'
                />
                <path
                  id='Path_14530'
                  data-name='Path 14530'
                  d='M77.943,29.119c-2.465,0-3.663-1.392-3.663-4.252V17.618h-3.1V13.772h3.1V10.744H80.25v3.028h3.125v3.846H80.25v6.01c0,.814.188,1.645,1.586,1.645h1.539v3.846Z'
                  transform='translate(-48.722 -10.744)'
                  fill='#fff'
                />
                <rect
                  id='Rectangle_610'
                  data-name='Rectangle 610'
                  width='6.057'
                  height='2.879'
                  transform='translate(89.329 24.076)'
                  fill='#fff'
                />
                <path
                  id='Path_14531'
                  data-name='Path 14531'
                  d='M132.837,45.866c-7.464,0-11.094-2.6-11.094-7.937V37.4c0-5.151,3.733-7.762,11.094-7.762h3.238c7.362,0,11.094,2.611,11.094,7.762v.532c0,5.341-3.628,7.937-11.094,7.937Zm1-12.531c-5.178,0-5.951,2.676-5.951,4.27v.146c0,1.023.431,4.358,5.98,4.358h1.175c5.548,0,5.98-3.336,5.98-4.358v-.146c0-1.595-.773-4.27-5.95-4.27Z'
                  transform='translate(-23.793 -1.429)'
                  fill='#fff'
                />
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
