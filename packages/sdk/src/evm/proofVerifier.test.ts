import {
  BabyZKGroth16Verifier__factory,
  BabyZKGroth16RevocableVerifier__factory,
} from "@galxe-identity-protocol/evm-contracts";
import { Signer } from "ethers";
import { beforeEach, describe, it, expect } from "vitest";
import { ProofVerifier } from "./proofVerifier";
import { etherProvider } from "../testutils";

describe("BabyZKGroth16Verifier", () => {
  let sender: Signer;
  let verifier: ProofVerifier;
  let revocableVerifier: ProofVerifier;

  beforeEach(async () => {
    const { accounts } = await etherProvider();
    sender = accounts[0] as Signer;

    const factory = new BabyZKGroth16Verifier__factory(sender);
    const Verifier = await factory.deploy(sender.getAddress());
    verifier = new ProofVerifier(await Verifier.getAddress(), { signerOrProvider: sender });

    const revocableFactory = new BabyZKGroth16RevocableVerifier__factory(sender);
    const RevocableVerifier = await revocableFactory.deploy(sender.getAddress());
    revocableVerifier = new ProofVerifier(await RevocableVerifier.getAddress(), { signerOrProvider: sender });
  });

  describe("get verification keys", () => {
    it("should return unrevocable verification keys", async () => {
      const vks = await verifier.getVerificationKeys();
      expect(vks).to.have.length(50);
    });

    it("should return unrevocable verification keys raw", async () => {
      const vks = await verifier.getVerificationKeysRaw();
      expect(vks).to.deep.equal({
        protocol: "groth16",
        curve: "bn128",
        nPublic: 17,
        vk_alpha_1: [
          20491192805390485299153009773594534940189261866228447918068658471970481763042n.toString(),
          9383485363053290200918347156157836566562967994039712273449902621266178545958n.toString(),
          1n.toString(),
        ],
        vk_beta_2: [
          [
            6375614351688725206403948262868962793625744043794305715222011528459656738731n.toString(),
            4252822878758300859123897981450591353533073413197771768651442665752259397132n.toString(),
          ],
          [
            10505242626370262277552901082094356697409835680220590971873171140371331206856n.toString(),
            21847035105528745403288232691147584728191162732299865338377159692350059136679n.toString(),
          ],
          [1n.toString(), 0n.toString()],
        ],
        vk_gamma_2: [
          [
            10857046999023057135944570762232829481370756359578518086990519993285655852781n.toString(),
            11559732032986387107991004021392285783925812861821192530917403151452391805634n.toString(),
          ],
          [
            8495653923123431417604973247489272438418190587263600148770280649306958101930n.toString(),
            4082367875863433681332203403145435568316851327593401208105741076214120093531n.toString(),
          ],
          [1n.toString(), 0n.toString()],
        ],
        vk_delta_2: [
          [
            14992997694787798298970128428651735156878746405574581777463392851219891893781n.toString(),
            13382824629081054131218833335176402998433623280720282474363094935338262422270n.toString(),
          ],
          [
            20795590244823410398603606172994427921866842716949936464446009005497705344370n.toString(),
            804122157291260134274964543508763620825033741658958140658682496549278923901n.toString(),
          ],
          [1n.toString(), 0n.toString()],
        ],
        IC: [
          [
            19764436097581810314981626268114476419304968023360522705050759260578697031462n.toString(),
            8451221249198589510842464045063602196787955791157681746389594127570869984928n.toString(),
            1n.toString(),
          ],
          [
            21274084361069811495645657261374711891271996424091601874260232553721691430414n.toString(),
            18000760790522873766821443416445254770267418552173774295864206456854759299925n.toString(),
            1n.toString(),
          ],
          [
            15406250183619285448547045124806907366410436301666555537778268068652090454826n.toString(),
            16536866637232299722780757345722186540586417773472679268766516998907360267632n.toString(),
            1n.toString(),
          ],
          [
            18374705184999687319171921539828416791438685495665607649793873489922597027600n.toString(),
            1324933125121386374556026239019389403336018576970746564093745069887950534538n.toString(),
            1n.toString(),
          ],
          [
            21457380141608127838031972036608507773411663714612203367705414415111561961277n.toString(),
            16018892444415488221673569328605540820594796341281504466704561641863116563640n.toString(),
            1n.toString(),
          ],
          [
            4410962418506163125770089415721869910260536222460700836340037001025748261657n.toString(),
            12196544090537868588257394514303562289870399093465372249911888281222653317102n.toString(),
            1n.toString(),
          ],
          [
            16355683075872354209267838353583450687199376651860741592253396291886816543862n.toString(),
            8050682799666257391554605850006270160377444038524969785464126797015352749651n.toString(),
            1n.toString(),
          ],
          [
            15130082049987335261186284021682267001157753150054785745432629861697791280041n.toString(),
            11409658019373236419032912460491744865103271076229735296217123384950365303683n.toString(),
            1n.toString(),
          ],
          [
            9239095888561578936225914783731536081988128122942802873108497080576303816484n.toString(),
            19627935081539557575283341840595370652002756337934390012485590940687364697288n.toString(),
            1n.toString(),
          ],
          [
            1544399278273077596304550000514283833778290595157696898003276405603026075525n.toString(),
            12446151319216301189634940789701302821473889204933697496346243428390391624249n.toString(),
            1n.toString(),
          ],
          [
            4936749834027810796851373254552130530859646770418885520111981651453231423245n.toString(),
            4695807811926245815954974360257940071643216870360652435028803223339780553170n.toString(),
            1n.toString(),
          ],
          [
            4386575281807163938236728588139510785832125338080551306676099982544329826031n.toString(),
            21854523620979501974914214769323826893815395641321488249328265610525413876169n.toString(),
            1n.toString(),
          ],
          [
            17087426415995636070231091668322859160271781381287693465566270886052258684849n.toString(),
            21281749810427109997695417984136831170564875549572164580740725078883719443756n.toString(),
            1n.toString(),
          ],
          [
            4694568533132038325785559030661195239336100288714016265423550859067921485661n.toString(),
            13379560590872257908754863449011215932119472869546011755200122317649852454611n.toString(),
            1n.toString(),
          ],
          [
            10550810178264882050197120045435651255510437946929704560960055862934233593614n.toString(),
            9782748714520027917613119514237169222361657844606804275223173790586411176386n.toString(),
            1n.toString(),
          ],
          [
            5914524855691587775724793258915080995144157669338156007826407442379152618637n.toString(),
            12397453008182332797283780921871184363383883818158138717833932109963434050176n.toString(),
            1n.toString(),
          ],
          [
            16837586497481772092479543877979949414951845091405932961149069997036601470834n.toString(),
            16144891566083854639395947018697451368349959925473031654640966655021187669246n.toString(),
            1n.toString(),
          ],
          [
            10567482486088980042721003523293196249588750547058227520825109679160089820321n.toString(),
            18477812318770410046283056381658040574361828280620497289914213363727644682160n.toString(),
            1n.toString(),
          ],
        ],
      });
    });

    it("should return revocable verification keys", async () => {
      const vks = await revocableVerifier.getVerificationKeys();
      expect(vks).to.have.length(52);
    });

    it("should return revocable verification keys raw", async () => {
      const vks = await revocableVerifier.getVerificationKeysRaw();
      expect(vks).to.deep.equal({
        protocol: "groth16",
        curve: "bn128",
        nPublic: 18,
        vk_alpha_1: [
          20491192805390485299153009773594534940189261866228447918068658471970481763042n.toString(),
          9383485363053290200918347156157836566562967994039712273449902621266178545958n.toString(),
          1n.toString(),
        ],
        vk_beta_2: [
          [
            6375614351688725206403948262868962793625744043794305715222011528459656738731n.toString(),
            4252822878758300859123897981450591353533073413197771768651442665752259397132n.toString(),
          ],
          [
            10505242626370262277552901082094356697409835680220590971873171140371331206856n.toString(),
            21847035105528745403288232691147584728191162732299865338377159692350059136679n.toString(),
          ],
          [1n.toString(), 0n.toString()],
        ],
        vk_gamma_2: [
          [
            10857046999023057135944570762232829481370756359578518086990519993285655852781n.toString(),
            11559732032986387107991004021392285783925812861821192530917403151452391805634n.toString(),
          ],
          [
            8495653923123431417604973247489272438418190587263600148770280649306958101930n.toString(),
            4082367875863433681332203403145435568316851327593401208105741076214120093531n.toString(),
          ],
          [1n.toString(), 0n.toString()],
        ],
        vk_delta_2: [
          [
            13982707264366558261146595797542785363281966817985917957620993113155283930842n.toString(),
            1882364706458503005232475951038199065763410901527756464187180105229112396841n.toString(),
          ],
          [
            3361216318719617247167450609233098257971537409972105379556292018008174242993n.toString(),
            3160664283412126522362163156335042446690680033366115964460170810315877756859n.toString(),
          ],
          [1n.toString(), 0n.toString()],
        ],
        IC: [
          [
            16344271723525745330089406167718673831229607420873253431918787878218777643278n.toString(),
            19068357211030992922788254345123980117959234850319825677618292842457691405030n.toString(),
            1n.toString(),
          ],
          [
            6014118828353164019223759243643946490962455888512110113738628213575528401078n.toString(),
            952560696260176513599650249066337469280887181447382521840961688826023614065n.toString(),
            1n.toString(),
          ],
          [
            18014663056359008200385623839092936993447069832043874378189731939631495230189n.toString(),
            16795844646742494465437498259853472142944507173403737817366815256427780734236n.toString(),
            1n.toString(),
          ],
          [
            14373415734035609721810433489583741151275932240655064686290661196403337233503n.toString(),
            1711037313693371500679228513798872233623076292082332844479396590369924301500n.toString(),
            1n.toString(),
          ],
          [
            4377713024822627456391534429519105229432261544520581999724742076362647481991n.toString(),
            3654939157182750025626238971442334937379360345622454301685395907715915786528n.toString(),
            1n.toString(),
          ],
          [
            12434842560341427381091009848886966190317018431571186985212767913582793091033n.toString(),
            960689068374467506525486367991002349267374064041230446260392423587028682797n.toString(),
            1n.toString(),
          ],
          [
            16116740122579596964080959678026860764868509051069170613097150798900574800120n.toString(),
            18625490230063446491898055124160076553956874307937109426236634069554743739504n.toString(),
            1n.toString(),
          ],
          [
            3328183361741286394228024661246306080676729522823836540770459393800572206293n.toString(),
            7727929394925246597242379189968256067843999732477725082090107983219972969086n.toString(),
            1n.toString(),
          ],
          [
            13472499580349749560725914977774410001141081275760218439463081236979741688008n.toString(),
            19530618553320463860467186577796936833360983842014858203085348959353732645230n.toString(),
            1n.toString(),
          ],
          [
            17498277990495913709037423552919656338979160919293909339937141462684017956196n.toString(),
            6257656821019173674606933263592807142929692127931766385726132437188595517970n.toString(),
            1n.toString(),
          ],
          [
            9904744704295542451075353263976479631548333459739603579416762901546454395958n.toString(),
            16865653462242999988333261656181644976255484812213305768443543308570775445853n.toString(),
            1n.toString(),
          ],
          [
            17276930714424563938521830782032618868277725616148136077827171096394434413630n.toString(),
            17596926818845562345130858017563587378698929254267990545207760627791567992437n.toString(),
            1n.toString(),
          ],
          [
            10690041012906057134648963944616475397467203110933997351171385905107603786178n.toString(),
            2426599412031276779556285272336062830283714413559998841981451603513647891427n.toString(),
            1n.toString(),
          ],
          [
            14677712908659821988951510335729733019134170755054403947488039668179369204015n.toString(),
            17861018456699773219339698494130023475752223596270757350019479155022095189599n.toString(),
            1n.toString(),
          ],
          [
            4059590728914927822667888753564200978294911732087844349849756028359048383529n.toString(),
            11851363417295131201057968329773341445724280888705510695977394342536126807843n.toString(),
            1n.toString(),
          ],
          [
            7994873373382848775309022009493019090315919998684705676392084020203450953676n.toString(),
            18423877133953363736951056196478183204211849265221023917424661421126345305172n.toString(),
            1n.toString(),
          ],
          [
            19381774082078471354145054015992261706028134987966526644430415687337728636125n.toString(),
            3041262511371001224328973897499583386865775708418990603668899165883122322535n.toString(),
            1n.toString(),
          ],
          [
            15576831529985557090169220347479648025003475911133392527968808385164396707157n.toString(),
            20786553444063989335647215616824231285883907234229069851003359096848464931780n.toString(),
            1n.toString(),
          ],
          [
            10242101596772973919673378396182430798758626758072900422483984912622144535264n.toString(),
            20964342351907694552983231154762237386081339332634359708567530724290111337773n.toString(),
            1n.toString(),
          ],
        ],
      });
    });
  });

  describe("verify unrevocable proof", () => {
    const proofs = [
      "17287865311066985283733208542516157961701724530658897303094041758582666454951",
      "16405217597499890447358208038784999082513976172901293744992488924552119467272",
      "17511724199377222514490750746829007629419810902896498259755015850482012584259",
      "5869714225445181399954162051213302620533047632865444788009058022334438344266",
      "1959355861754469298520794265257933597158410331539646277590065438413068926603",
      "19096918162369271605029848542376504228494702827220185035973104444317503726627",
      "216728479657378818913675440640775678141064487658099071457103103208212781875",
      "19402394114196496340294975308511152383663754622436148789178605935857963282953",
    ];
    const publicSignals = [
      "778",
      "666",
      "849760699622323138423214777646360676343533388377892699649686780211564373610",
      "499624985322695799482841591270479138186369447061",
      "0",
      "4079407824",
      "1743582416365651167392966598529843347617363862106697818328310770809664607117",
      "19",
      "0",
      "50",
      "0",
      "101",
      "199",
      "201",
      "6",
      "8",
      "0",
    ];

    it("successful", async () => {
      expect(await verifier.verifyProof(proofs, publicSignals)).is.true;
    });

    it("failed", async () => {
      const wrongPublicSignals = publicSignals.slice();
      wrongPublicSignals[0] = "0";
      expect(await verifier.verifyProof(proofs, wrongPublicSignals)).is.false;
    });
  });

  describe("verify revocable proof", () => {
    const proofs = [
      "11257167836791023033685626118251722795590086285861503011138783367418388774817",
      "20896536297399464379561834869019610649840627342166291895910626779271251366437",
      "16990391134421136165810966166456369959274405114292967764114734352894094711024",
      "16595182854684234847099456831264849898355256359984025768577697973168597854235",
      "3829988524325219120970975891226103905518493048031001585475061597268934763845",
      "5271886994701011122763779536702041955318726357955841646783674030824164244943",
      "16737669457239861109117754448841627495369232887321049467500167011765859094656",
      "5842809538993923510294667222397398783167692776967111075719245483847740309306",
    ];
    const publicSignals = [
      "778",
      "666",
      "849760699622323138423214777646360676343533388377892699649686780211564373610",
      "499624985322695799482841591270479138186369447061",
      "0",
      "4079407824",
      "1743582416365651167392966598529843347617363862106697818328310770809664607117",
      "19",
      "1243904711429961858774220647610724273798918457991486031567244100767259239747",
      "0",
      "50",
      "0",
      "101",
      "199",
      "201",
      "6",
      "8",
      "0",
    ];

    it("successful", async () => {
      expect(await revocableVerifier.verifyProof(proofs, publicSignals)).is.true;
    });

    it("failed", async () => {
      const wrongPublicSignals = publicSignals.slice();
      wrongPublicSignals[0] = "0";
      expect(await revocableVerifier.verifyProof(proofs, wrongPublicSignals)).is.false;
    });
  });
});