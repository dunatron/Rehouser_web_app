if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,d)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const f={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-291eff0d"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/04b4dff6fc634bc4b528c6db3ec0aed546f46f0b.df07e254da4e30a3fa34.js",revision:"40868648b9364c53ae7fb0135461d254"},{url:"/_next/static/chunks/0cfb7f971f7627f0f26b66ef9247fc77003f4ead.3303035394f07ed8b380.js",revision:"8cf1093ce9fee93a61abf4d75d635202"},{url:"/_next/static/chunks/108.4d206401aabcc21e298e.js",revision:"58791cd2179bc71c278b9388b4f5ea28"},{url:"/_next/static/chunks/109.29c23a793a7c346627a2.js",revision:"3e2ebd63615aa8e492918b4e3e75ef90"},{url:"/_next/static/chunks/110.1cbcf0cf2c49b895f09c.js",revision:"1527d66efc2adf4e00c26ad33928eff4"},{url:"/_next/static/chunks/111.a4536c9d18bd707db4a6.js",revision:"1734f4f87c2ee247d7a6bd92e9d9a535"},{url:"/_next/static/chunks/112.4cb48aedb0ceb09443e4.js",revision:"a0d0e2a2e9524e44f94162409fd94b93"},{url:"/_next/static/chunks/113.79b79c4b6f3f0177204b.js",revision:"2dc2aa193bd0d27301e452ee52388562"},{url:"/_next/static/chunks/1223b525931e23c7dda3b8919cc2e38b0649cead.d47409ca72c28c799f86.js",revision:"86df7c8eb89a85a5fc4353fedb45c2dc"},{url:"/_next/static/chunks/146b34a37f12e65f9210909ef885d9cdcea255c4.e50fd9aeeea702eb91af.js",revision:"7ed4fb1ac528652f8c9f5b3e8e52e2cf"},{url:"/_next/static/chunks/188fd8270a39c81cbca816b00b35a1e4ca18eafe.22dc1b83dd8740faf9fc.js",revision:"e51ce3840d8b224e25583c4012b1b285"},{url:"/_next/static/chunks/1aa3dd60fc43c73934d5ada0f7378d6477bd60ef.3157e5a2dfd12dbd8ab2.js",revision:"97e3ff5ab2b5542d1b75445531605031"},{url:"/_next/static/chunks/1bfc9850.b40458360f9e9e5974ff.js",revision:"538d3d605efbc8ce4ff126f1eea0613a"},{url:"/_next/static/chunks/1d3b25e4d4731abb22a64cb41de90913a6615f4a.bb30e81ac622ce54570a.js",revision:"99a3054906c46be24f561c16c2a89e77"},{url:"/_next/static/chunks/1f12789f1253a6969ded3670d68ac42c765e9a03.2b567c9ea9deac52bf85.js",revision:"5c57934dcf26ec7e5cfce5d6a15dd1e9"},{url:"/_next/static/chunks/210e6083.7b39c156364258e18732.js",revision:"f55bdbbc7ae587ba18bd916bece8310c"},{url:"/_next/static/chunks/2cf1c4cd6b89dd850722573865743bfe232fea90.4796edeb1b22531766a4.js",revision:"a783ba21ef7ee772f08f4df1cd7ec3f9"},{url:"/_next/static/chunks/3982d7e7534da003b7981bf109b8f9f96243cb79.e7f9dba9c6354651d7b1.js",revision:"e6b636243d271cbb4c92911a2000818e"},{url:"/_next/static/chunks/3c0a5214ae55f6a556c272c4cdcc349cdc5a7f0e.1732d0c22dd773c71446.js",revision:"cd01ffb406a4ae6b9e0c93c83619611a"},{url:"/_next/static/chunks/3c8e6d88438496e774ec2a517855dd367b37a37a.43c66b134669905098fa.js",revision:"ae80335f7100354328dff33d85ca85c5"},{url:"/_next/static/chunks/51eada634bc24fc1383c90dc9e7259b9447f3749.e1d6811d7cd4da35f4a9.js",revision:"1ac9ccd1e9477cea3648326badd37694"},{url:"/_next/static/chunks/6d20e1f51a178aa5b36ddbfe2595d63e3aa7236e.470bd5a850519241b087.js",revision:"5ec95a13b8d60c1108e7d88a26e953b8"},{url:"/_next/static/chunks/75fc9c18.1035252014c3089024e6.js",revision:"19f95b8a77d174986977a6887d53e221"},{url:"/_next/static/chunks/7de11300caf71b3478833140aa682476d182504a.4dc7fc68268f39016c22.js",revision:"2793a8320203da5c3802055d9ea1c95d"},{url:"/_next/static/chunks/7f316c0e4a75122157be705a224c89df5cd0860f.f1e4328e38689a9f00ba.js",revision:"4b98901b7518b2b9f90a9ffabca9d740"},{url:"/_next/static/chunks/839ef743e0bf4e587be6cbe6fb6f2650d65bd448.f1dc62c8cedf38d97cef.js",revision:"8b0440201de866345db87c1df6380019"},{url:"/_next/static/chunks/84c042bb.6e903db8e8bbc14e260e.js",revision:"22d653a3641093930fee43a39dd4dbf5"},{url:"/_next/static/chunks/8b36cd9272f37bab05b511b4a2a98eec1ea2dfdd.dc9d964fbb25baf92edf.js",revision:"d43fbca25a525e87f21f2ab35258a085"},{url:"/_next/static/chunks/9b85ca1baec379a3a8dc9bc3d0505d1dd8293d48.718f7b0fce1e9ff70ce2.js",revision:"21f8d2c7f2d2ec404b148464eaacab06"},{url:"/_next/static/chunks/a1b350a358b3990bf93539fe93c52468d4ab1817.c138311d9def5f9562f3.js",revision:"d3a364ccee92a5c68df9959a2cc65759"},{url:"/_next/static/chunks/a380654b414696427247ab245c4d51e987200a7c.8013cf5d359fda8dc442.js",revision:"3e39c83ff8db27b2e0e411ad426e904e"},{url:"/_next/static/chunks/b4a3d7e5fab2faa81190c3d676dd00ba81a8e2c7.c76502de79cd3679da81.js",revision:"8e5530348f97cfa38bbd58d6bad9fa5d"},{url:"/_next/static/chunks/ba37f6a26cf7c4883dc9a6ab256ef57c3253a1de.fac2cc752fabd04e2349.js",revision:"9de9ce6c642f2cbf8fc1c84d0bf6cabe"},{url:"/_next/static/chunks/be3cc461da97cabf646b439d9e6c5e34928b4fc7.25f5f62381d3a1285fc2.js",revision:"69ed44e15a50bd12fac7ad4e35ac4c0f"},{url:"/_next/static/chunks/bee240a3.bbd5dad9abdfb9d7cca5.js",revision:"ddd734562266a23d932a46664bdc5a5e"},{url:"/_next/static/chunks/c2b53a7f5e5849195c5bd3d67cf6a9666ff38f6c.e66efccf23294f96088a.js",revision:"fc291d0e98d2f9d43e54751a271e6e3c"},{url:"/_next/static/chunks/c85a2d5fbee3c83ae0e4f0d780a6249b0d212277.15e4fb8ae235744c494d.js",revision:"bbe5c9f21e0b10e31719aa7ebfa2398d"},{url:"/_next/static/chunks/c9c6fe98.d43f690af869007e51f6.js",revision:"9424400f0dd596becfbad70289fd9b32"},{url:"/_next/static/chunks/ca31e254b3128424776b2f7f05b31dc5ff7dd131.7f48823df4deda930be1.js",revision:"981c709843c33da25126c6d840b1b7cd"},{url:"/_next/static/chunks/d3f4d7e4431470ad03759645f0881805bc330ff4.989ae7cc2e17d74fdb41.js",revision:"edf7ed5b2bfe9774cea9f3950852e1e4"},{url:"/_next/static/chunks/d7ca8ffd108a5bd1b7fe96da7a369ebbdcd10f42.5b297c6c2a522083c093.js",revision:"f385b536b2e0b26db0fbb0783b64e467"},{url:"/_next/static/chunks/dead90faf78fd163e47c87f721cb53674b01e044.c242e18e19368a5a12a8.js",revision:"2fe84b576d9de43f45c8e6132839a153"},{url:"/_next/static/chunks/e5026dfb4a8a5da6e76ef592dd2bb0eac4334d5d.be35d3bd2732db3c8388.js",revision:"792216073214226b75132267f5460cf5"},{url:"/_next/static/chunks/e520c3b9.e4fc2ce913188aac3141.js",revision:"68d4947649fcd1dc50b7afd590bc46bf"},{url:"/_next/static/chunks/ea6c164cca836dc5ce0a30e2db9c1caf337e2466.e68a4b3a8d4e5f7c640d.js",revision:"936bfad93a07da7d2054ed51797ef94a"},{url:"/_next/static/chunks/ef088125e2618a27508f89d30208eb1c96714dc1.f30c520781e11a11e260.js",revision:"c056d579ae29a01db4f4ef73e0bec642"},{url:"/_next/static/chunks/f057a831.fd3ae9febc642e36dc58.js",revision:"e84c07a2ebfa4f8bf1c207b555d8b3bb"},{url:"/_next/static/chunks/f9fff01a.a7e7bb1241558cbf89a6.js",revision:"f8ebc99659f2f17b14de875ac01097f3"},{url:"/_next/static/chunks/framework.8bfd6b1b2db11ab187a3.js",revision:"ed12155bb236e591294042221840c9ad"},{url:"/_next/static/chunks/main-b844b60609a9f3949145.js",revision:"1a527790c429815e0d958d9db7dbceb2"},{url:"/_next/static/chunks/pages/404-f9712737897f5504fb56.js",revision:"5ecdff402f6e0251986e62f10bd0c18b"},{url:"/_next/static/chunks/pages/_app-1d64e171d042ce890d3e.js",revision:"ad979a566c1c12338a045baad23923b1"},{url:"/_next/static/chunks/pages/_error-4a3ea83f20be16d6710b.js",revision:"52eb3e19846015f4545994101f8517b5"},{url:"/_next/static/chunks/pages/about-us-bd5c068119fb54d06c05.js",revision:"fd817faf926ed900a171ba5aa88ef71c"},{url:"/_next/static/chunks/pages/about-us/%5Bname_url%5D-14cff036219296e94ef3.js",revision:"52755f05050ad724ca8c925b0234186c"},{url:"/_next/static/chunks/pages/account-6ffd60d148be6e4d9245.js",revision:"213b852c0e449c952ffadbd8ff148e7b"},{url:"/_next/static/chunks/pages/account/confirm-2ef52d6aa697fd55953d.js",revision:"4ae82e3455f9fdf45bd83c8794d9e776"},{url:"/_next/static/chunks/pages/account/confirm/%5Btoken%5D-1600eedcbeb7f6a77244.js",revision:"62abb20f66cf96d1a007c32a3062798a"},{url:"/_next/static/chunks/pages/account/signature-b66dbdbcf09c0f5f7a29.js",revision:"6dd2d47eafda2d7440d76e8da8f7277d"},{url:"/_next/static/chunks/pages/activity-68a03c507ee5135237cf.js",revision:"2518a3667884dc57a6c55887e590bcdb"},{url:"/_next/static/chunks/pages/admin-d54baecfd5002c1b64c2.js",revision:"5ed85f53d2d047aeda3cfca12925d530"},{url:"/_next/static/chunks/pages/admin/%5Bcontact-submissions%5D/%5Bid%5D-169dc8ddf29aa984af30.js",revision:"d3f7893d0f09f68518049a006f5e6ba0"},{url:"/_next/static/chunks/pages/admin/applications-f95ab9a923cf8f4710dd.js",revision:"1d37daccefb7947c9f742e3836c0cb29"},{url:"/_next/static/chunks/pages/admin/appraisals-f835e86fd975e1adf528.js",revision:"5858a5bc36b1e3d87c90a066510d3dd6"},{url:"/_next/static/chunks/pages/admin/inspections-08f3d634a2a923032d04.js",revision:"c1bf7c77531aa7a0c49b5bb6d7bfecee"},{url:"/_next/static/chunks/pages/admin/leases-642a6ef9ce4f5759b87d.js",revision:"ecca8bb33d1b15a1139959282ad18223"},{url:"/_next/static/chunks/pages/admin/properties-aff9a77507ff5db0255e.js",revision:"a98783247f897c8840d06968acad28dc"},{url:"/_next/static/chunks/pages/admin/settings-a9ff8d58e047bf87e00c.js",revision:"80dc41134ab0082b34e5f5a8a9dd0650"},{url:"/_next/static/chunks/pages/admin/test/server-crashes-24992e43124ebcf05f5e.js",revision:"c52393d87c91be940023a970a04d9bc9"},{url:"/_next/static/chunks/pages/admin/typography-4a2c6705eaa32e1a0773.js",revision:"e1708c171c645b994858f2728231bcce"},{url:"/_next/static/chunks/pages/admin/users-ad8426b7b5365cd28908.js",revision:"2ef09d4e8d08f0be11207e10e72b07b7"},{url:"/_next/static/chunks/pages/contact-f5d48181e7ac119bd1e7.js",revision:"7b8058c1bd7ecffc4cc9588de97b4b83"},{url:"/_next/static/chunks/pages/find/property/%5Bid%5D-4eeddd6136415d994666.js",revision:"0c9aa69ac47da72cf75054c4b3deece3"},{url:"/_next/static/chunks/pages/freeappraisal-aa293dd071a083a71d09.js",revision:"89115026dddd663f78cf81bce2cea497"},{url:"/_next/static/chunks/pages/index-777495098593bbf5ac6b.js",revision:"ae8119fdc75bdba8e71539147fbb7f64"},{url:"/_next/static/chunks/pages/inspection-0831fc086dbaf8c3a34c.js",revision:"43a781ebf945bce9f5f8a22c276d18f3"},{url:"/_next/static/chunks/pages/inspection/%5Bid%5D-fb3233af07920cdad812.js",revision:"7eb2bc7d9f09b80bd6a26032c6a95f5d"},{url:"/_next/static/chunks/pages/landlord-a2b9bf292554ce8eb09e.js",revision:"00746e8b3d4261ca237d80d761b908e9"},{url:"/_next/static/chunks/pages/landlord/appraisals-7bacedfd3e5ef0f2a335.js",revision:"894e9777054af9033e59d81aab239720"},{url:"/_next/static/chunks/pages/landlord/appraisals/%5Bid%5D-10e0911e36a0ce4a331b.js",revision:"f3d7e19e9abc18285198b323027b84fc"},{url:"/_next/static/chunks/pages/landlord/appraisals/add-fffc08b76f4302a96279.js",revision:"76f30b848c78d519479967a55fbf3f8b"},{url:"/_next/static/chunks/pages/landlord/fees-2e66cfbc80fd0e10a715.js",revision:"d946fcc8528ae64a58fd17966f62e6bf"},{url:"/_next/static/chunks/pages/landlord/leases-48d107bac29b3dfbf0e9.js",revision:"a01cf428256e07cd6894804d148287df"},{url:"/_next/static/chunks/pages/landlord/leases/%5Bid%5D-5763f5672db7d7fd798f.js",revision:"ca092dd1fec3f171cbda0c878e9ffd8c"},{url:"/_next/static/chunks/pages/landlord/properties-da1098332d1c4121e86c.js",revision:"a002f5dcb08da6a08baae421f568c125"},{url:"/_next/static/chunks/pages/landlord/properties/%5Bid%5D-66fc202bff9fbaaa7ad8.js",revision:"5f643ac179c76eb1ac6af1a777f9e698"},{url:"/_next/static/chunks/pages/landlord/properties/%5Bid%5D/edit-88154d77d841bada4685.js",revision:"e17fcc0c19ffe9d71a65d9e032602a72"},{url:"/_next/static/chunks/pages/landlord/properties/add-c6889ac30e1da82536cc.js",revision:"08589132228a363ec74b2bf71f951de4"},{url:"/_next/static/chunks/pages/landlord/properties/bulkadd-0210a6c522293a1e4370.js",revision:"967cb92697342ab6452724cbcb1f1e79"},{url:"/_next/static/chunks/pages/landlord/terms-of-engagement-189e404174f8cdd27cc4.js",revision:"946773b6f15b48d27f1fb7a89d3d24e6"},{url:"/_next/static/chunks/pages/legal-c9671b2b56ae83ab6adf.js",revision:"5d53b5b050d0bea0a6bd724488c89fe9"},{url:"/_next/static/chunks/pages/legal/privacy-policy-96c3fd174ee556b4b29a.js",revision:"26d883c871706c1e304ccdd8bbe29ebb"},{url:"/_next/static/chunks/pages/legal/terms-of-engagement-ad5f520710baf9eee3b8.js",revision:"1366c518ff4c7e9c2bd09846f41e9c91"},{url:"/_next/static/chunks/pages/login-c951af8f29ca843fbaff.js",revision:"9f4e96930b6b9f6e9e447945bec5b181"},{url:"/_next/static/chunks/pages/messages-8d097d24cad13843e9e5.js",revision:"f8d5a1848ebdd5f4f2983946f9141cab"},{url:"/_next/static/chunks/pages/property-search-43825712bbfb40844959.js",revision:"ef162992f16f794df02708ee3724c993"},{url:"/_next/static/chunks/pages/reset-00d6005b75d664345fb3.js",revision:"3bb00f5f1448fc5cc4e2ed81c053f7d8"},{url:"/_next/static/chunks/pages/reset/password-7afb61f54e90bbe3d832.js",revision:"b3efa2cf809bc9266305ca992fb8fa96"},{url:"/_next/static/chunks/pages/reset/password/%5Btoken%5D-a936562623914ebd9858.js",revision:"10b31bce3647d450e42dfe4bb84e1e8e"},{url:"/_next/static/chunks/pages/social-d1411d1187fdbfecc67d.js",revision:"950f4796cb60fd084b591e49d03534a7"},{url:"/_next/static/chunks/pages/social/chats-653293e3fabb4f86c800.js",revision:"55969abfd07ef80147b72f47e5276de0"},{url:"/_next/static/chunks/pages/social/chats/chat-537bcbe2e93de40812a4.js",revision:"0c38f04dd782febfcd1098792fc7d528"},{url:"/_next/static/chunks/pages/social/friends-e220b49c2cfc5b8473b7.js",revision:"67ef694aa5283a61e43fdc0a600d7f45"},{url:"/_next/static/chunks/pages/social/groups-6a8677b0ffe638833b21.js",revision:"cdc200310193b75f872c57588cb24a82"},{url:"/_next/static/chunks/pages/tenant-65c76a923c2f6dc499cb.js",revision:"6fd2e0124d9826ff3022260f5cfe0843"},{url:"/_next/static/chunks/pages/tenant/applications-40eb9f1241655c3f801a.js",revision:"69927471d313cc728a731fcfafb8911b"},{url:"/_next/static/chunks/pages/tenant/applications/%5Bid%5D-82060750a84864890e24.js",revision:"0191e1ebaa55b6f097c91c8f75332cbc"},{url:"/_next/static/chunks/pages/tenant/leases-d97a5490af2fdd2fdbdf.js",revision:"d480c9d5759d7c8e01145601f4249281"},{url:"/_next/static/chunks/pages/tenant/leases/%5Bid%5D-7e8bb25bb5170a8747d7.js",revision:"61f5a53aab5ed9ae730f76acb1b2e24b"},{url:"/_next/static/chunks/pages/tutorials-83bc7fb5708c0da4180a.js",revision:"12c8eb54dbd397be7b7ccab43d088d1c"},{url:"/_next/static/chunks/polyfills-b5b4180905aadb493b74.js",revision:"aa133e5ddae80f65fb4b262f45d3b542"},{url:"/_next/static/chunks/webpack-ce0658f422fca9b8595a.js",revision:"d68ac7e211e11b534191c75da0e58988"},{url:"/_next/static/css/6f05000c3acadb422590.css",revision:"26a71e06d5d10ac0a839c637db8b1add"},{url:"/_next/static/jBnkjGsMGHijslUfhn3dN/_buildManifest.js",revision:"4083e8556d075429923177ce3ec90631"},{url:"/_next/static/jBnkjGsMGHijslUfhn3dN/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/css/customToast.css",revision:"080a99f6e1b1b364ae39a29e4ad21b51"},{url:"/css/geosuggest.css",revision:"71d081779666a18e2757b16aa249764b"},{url:"/css/nprogress.css",revision:"d462b6ca22c36719856106e10f53801c"},{url:"/css/rehouser-fonts.css",revision:"91d7865b321aeebcaccdbf36785b534a"},{url:"/fonts/azo-sans/AzoSans-Bold.otf",revision:"b8f2ee5e72f28178899433cb91119c47"},{url:"/fonts/azo-sans/AzoSans-Bold.ttf",revision:"a4b0c7481bf5f3e12ae73efaed581108"},{url:"/fonts/azo-sans/AzoSans-Bold.woff",revision:"1bf6df8ef8367775fdb64682e16eb3aa"},{url:"/fonts/azo-sans/AzoSans-Regular.otf",revision:"87eeb2d253cb1bbf92f26bcfb76e0887"},{url:"/fonts/azo-sans/AzoSans-Regular.ttf",revision:"6c79f7fd645c0d39b4ca10428237984a"},{url:"/fonts/azo-sans/AzoSans-Regular.woff",revision:"652632abd81aeeb698f941982dce4eab"},{url:"/icons/favicon.ico",revision:"3122f01505642d6a660f6d5bbf91e80f"},{url:"/icons/icon-192x192.png",revision:"129de4cd0351cc746f06eda70c84542d"},{url:"/icons/icon-256x256.png",revision:"c093bdbf1516c33e92d14161edbe3935"},{url:"/icons/icon-384x384.png",revision:"0ccee2bfc299abeedb7471ba412584c7"},{url:"/icons/icon-512x512.png",revision:"64d8635aac6576bc094b0eb52a2fdda5"},{url:"/images/banners/home-page-banner.jpg",revision:"2e0e48b071b2c367665bbd3e7a65704b"},{url:"/images/person-icon.png",revision:"efa5e591a725f0b25bb9772a0641e79c"},{url:"/images/person.png",revision:"c84b28d4ddc12def5b1339f78de11d40"},{url:"/images/private_stock.jpg",revision:"b983f3db98a74446f5b816760714e99b"},{url:"/images/rehouser_logo.png",revision:"3103e2eb1f20c8258709a0ba5ddf7661"},{url:"/images/signatures/rehouser_admin_signature.png",revision:"0c1d791522cd227ececf56aba4c0041f"},{url:"/images/svg/ReHouser_bare_logo.svg",revision:"9a79b61bbe8d96f87e3116c969267336"},{url:"/images/svg/ReHouser_main_logo_original.svg",revision:"8d6647ec43e748dae8ce15d904639eed"},{url:"/images/svg/rehouser_ico_dimensions.svg",revision:"e12a0f3bb58d0c02246feb30be2488af"},{url:"/images/svg/small-deer.svg",revision:"8ce467fcb15154d65b6efcfe7e97edc1"},{url:"/images/team/heath_dunlop.jpg",revision:"26c03b4109d1cc2f4a8653e5b6b0f99e"},{url:"/manifest.json",revision:"73bcea9847c247fa4c57b4a35353fda4"},{url:"/robots.txt",revision:"edf2e421f7ee3479e0266a6792428e85"},{url:"/sitemap.xml",revision:"1fdf389d1f52ccc6d462cc833ff584a3"},{url:"/static/ReHouser_bare_logo.ico",revision:"746ab3537a8ff8dff64ff648e13d053c"},{url:"/static/favicon.ico",revision:"85dc1b580b39e9d9f3e2e8e32b80372c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.StaleWhileRevalidate({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
