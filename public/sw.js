if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,f)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-291eff0d"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Xk-86kHq7WUyY5BDWyzgS/_buildManifest.js",revision:"cc076cfb99e7cc706cb7ddd2b0e0b273"},{url:"/_next/static/Xk-86kHq7WUyY5BDWyzgS/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/02ac11998e2427ad84664bf8eea1c65fef5835f3.c7569fda587768278892.js",revision:"1477ba4dceba0a73ca02eaef0ec42690"},{url:"/_next/static/chunks/09e7e196bf6f1d7674816ab240705f755610532b.429f69da9b25252fc78f.js",revision:"a445bf278fa91f069db411ca8a39c3cd"},{url:"/_next/static/chunks/112.cb982b3202829fc98575.js",revision:"ceec0dcb95545c6995d2cb19bae3571c"},{url:"/_next/static/chunks/113.f3d00903a0bde4421308.js",revision:"fea7f6ff5ffda6fcf1c80bb8c65a98ed"},{url:"/_next/static/chunks/114.3e7b895466a32bde2cdd.js",revision:"5c35a79ed9cfb57304e4662dd1db1140"},{url:"/_next/static/chunks/115.179cb189a8c3f5ac8a3b.js",revision:"6cbdc578cd09173d133cf1f839f85da3"},{url:"/_next/static/chunks/116.847e61a3f03590968ff8.js",revision:"270f83c0b38c077396ecaf7e02f75033"},{url:"/_next/static/chunks/117.cbde232aff2c0a529abe.js",revision:"2e6db2bfcfbf5aea9de98f39e12b70b6"},{url:"/_next/static/chunks/118.747c99a2b5e5161ec49f.js",revision:"3f7fdbc7090dbbe732df8e2e0da2a5ab"},{url:"/_next/static/chunks/1bfc9850.2a1764eafb7d6a055248.js",revision:"3f0e00942c00405b58219e517acb96fe"},{url:"/_next/static/chunks/1feb7162aabf72ccfcd74518116dc9f0e621a781.5155355a351c70b696cb.js",revision:"817ef9f92b3fe83cc4cb16c43582611e"},{url:"/_next/static/chunks/210e6083.b64928b20ecc38ec6a3f.js",revision:"0611098bb7c39b927833d3aaa1d45be5"},{url:"/_next/static/chunks/36d78634bf893f7552e1795da95446b5fd490744.c1b2fe20aad79876beaf.js",revision:"0fa2c064fb94e059ab320d8117069087"},{url:"/_next/static/chunks/4acb78c985ec56883ca5e790314de4fedcb9ac02.e789cb0aba0419828fc5.js",revision:"3fed2b96ba3e3c4fb1618cf2717dd224"},{url:"/_next/static/chunks/51eada634bc24fc1383c90dc9e7259b9447f3749.1a18741d53d1a8410784.js",revision:"dfe3361fc2d55b173db8611663433d9b"},{url:"/_next/static/chunks/568d8558a7cf1613baa6eb40f7a394d98ead88be.5ef568a82eb3e1218361.js",revision:"4eb8fc0b4efb0dc392dd9e7fd1b7fc8c"},{url:"/_next/static/chunks/5790ae959a35723cb09520282eaca3c9060554cc.0442b9b89b91b3e5bfdf.js",revision:"bb4f07193ac32aaaaf5f09729a893ad5"},{url:"/_next/static/chunks/65b20de3fb227b3bf95c9deb80aaa0a7233e0333.a93e0b9ce80dd6af8693.js",revision:"88490c6891f098b8716416592d4c408b"},{url:"/_next/static/chunks/6996a64551334ad14875f8a2df9bff9b1e042ada.ad80ba2f6fcd132ed75a.js",revision:"1cd20ebaf1abef474d95ad3e4769d1f7"},{url:"/_next/static/chunks/6d20e1f51a178aa5b36ddbfe2595d63e3aa7236e.35ce6330a4e21780be1a.js",revision:"b4a7d47d6dadc4f76ae82a252832b35b"},{url:"/_next/static/chunks/6d2bf3c33be583ebd681818f22074b911862ffd1.adcbb2c1f981f3af8415.js",revision:"055777f194b24751f25fd789753b7e2e"},{url:"/_next/static/chunks/707653071941aa522d30ca64a3676b04b4ffbf4b.6c119b60cfb343e9bcd6.js",revision:"24604945646e2503f45104507ee7a0d5"},{url:"/_next/static/chunks/75fc9c18.f1b4cb0bfd40d9f72df1.js",revision:"86a3d8f2932543af6901418dbbcc2ca1"},{url:"/_next/static/chunks/76ccd499307f4cef3120d3f0e3646c25fe9a6a68.c242e18e19368a5a12a8.js",revision:"2fe84b576d9de43f45c8e6132839a153"},{url:"/_next/static/chunks/7f316c0e4a75122157be705a224c89df5cd0860f.3b8041ff9944b743e863.js",revision:"50e9b8d272909752b20d24cef030dcec"},{url:"/_next/static/chunks/84c042bb.0f4bf3743533a6eb4f2d.js",revision:"3aacfcfb8f5578884d20813f6f5e3a3a"},{url:"/_next/static/chunks/895a5ca8968d1d4b8401e2ccf8ffba6e0a54c1da.5924619451810285e58f.js",revision:"534cc74caf4ce7c42ae2e656b0595a28"},{url:"/_next/static/chunks/94df193b9f37af07d37cdafda827ca44fcc4a47e.7f5981b5d5b2f356d17f.js",revision:"13dbbefdeabad296f8a7c4bfeca0c52b"},{url:"/_next/static/chunks/9f1a2581b67222bf2b4bea0d6c86e84a1d457df2.44ad0650e03859985495.js",revision:"32206e7d54df3d4a4974c64df74582fd"},{url:"/_next/static/chunks/a495a1d2936f4e889ab8ce195515e7188d9c44a6.56036ffedae75621d90d.js",revision:"50a72d6e1fdc3343f11a7dc9d5107c24"},{url:"/_next/static/chunks/a94706e6ed7f6de145c3099bf44aa4bad6b2f178.d3bc342f43203dd7573b.js",revision:"2710cbd0b02fe0bf3f1188ce83a37a0e"},{url:"/_next/static/chunks/b4a3d7e5fab2faa81190c3d676dd00ba81a8e2c7.f313eb1e5647c3c68593.js",revision:"a9aaadf0a49ea5fa9db3ffed6f0ff169"},{url:"/_next/static/chunks/be73fc631b6be62faade9794b1af894a5de223ab.3d13b478b28716b0e885.js",revision:"b7134bf97066c7843453c02ae435b927"},{url:"/_next/static/chunks/bee240a3.9a86fc55b4a9ba637430.js",revision:"770514fc8de304f51b328060778d4c18"},{url:"/_next/static/chunks/bfdcdd3a10320d8936a2b6c01fd3213cb6a8f310.22dc1b83dd8740faf9fc.js",revision:"e51ce3840d8b224e25583c4012b1b285"},{url:"/_next/static/chunks/c26f80659c6155100d62745dbc0476a2b804957b.d398a5352ca237ae4acb.js",revision:"f89fe01a75be03cc7fe47dccdbf32bfe"},{url:"/_next/static/chunks/c2b53a7f5e5849195c5bd3d67cf6a9666ff38f6c.0e9059c8f8557f0374c1.js",revision:"6cf90f9ba7b7aa754492a28d13a68e6b"},{url:"/_next/static/chunks/c9c6fe98.4794dd230cb267825d6e.js",revision:"5d414b0e8d50d2f511d93237449f078c"},{url:"/_next/static/chunks/ca31e254b3128424776b2f7f05b31dc5ff7dd131.c3125f71b0b50d2d5794.js",revision:"95a21f8f9775ee5b1aa85789da23d696"},{url:"/_next/static/chunks/caaeed668462b2e02fa76d2a172679df5ccaaa58.adb4911580735195f9db.js",revision:"6da158d84b373523acb5c7dc3171162d"},{url:"/_next/static/chunks/cbfedb725a05b55c04525136d078713b9047a408.6f90099d55217257802e.js",revision:"c047f230f14092ef46d498aac6a682aa"},{url:"/_next/static/chunks/d3f4d7e4431470ad03759645f0881805bc330ff4.5b1ae3cdd6bee6e2f446.js",revision:"595061fad8e766d6bf66a62ccecc7708"},{url:"/_next/static/chunks/d7ca8ffd108a5bd1b7fe96da7a369ebbdcd10f42.885b549071c9bdef9ea9.js",revision:"45a700e540575fa09fcc7a23fc9f6626"},{url:"/_next/static/chunks/d8cf611949463c2466f96d16bf1908f1febf1eb4.f933dc9abaac44312f95.js",revision:"b49c8c3b28c6d137ff654f96f4aaf5c8"},{url:"/_next/static/chunks/e520c3b9.e4fc2ce913188aac3141.js",revision:"68d4947649fcd1dc50b7afd590bc46bf"},{url:"/_next/static/chunks/e6ee45d3b5f8f4a2b4cc24b787aa8598870aff7a.019f48486f5582d0765c.js",revision:"5f8ab616eaa62505d001e109e2d73b5f"},{url:"/_next/static/chunks/f057a831.52c0229fbb4e767a61b4.js",revision:"4c5e1c46e78bd7ba5917afb3b96b5df6"},{url:"/_next/static/chunks/f7de8c3cad3cabf3d23baa5fcb2a4d18b3143d88.39f3a5528420e8c393c6.js",revision:"2cb86d2129f40388a5de506b60735811"},{url:"/_next/static/chunks/f8d787aaca3343d1b1293ef08ccafdf724af5c28.574235c057f2a1361541.js",revision:"4c133338a24c42056c33aa7c9919ce62"},{url:"/_next/static/chunks/f8ff6a032993e8d96dfe1b06f293c1db43dac6bf.dd63ddfc396bf376deb5.js",revision:"48381abcb695dfd630b91a5cfeca8ab2"},{url:"/_next/static/chunks/f9fff01a.ef7db6773a41134ed39c.js",revision:"fb2855d3e66b1362c5f43e1b28cea3f2"},{url:"/_next/static/chunks/framework.8bfd6b1b2db11ab187a3.js",revision:"ed12155bb236e591294042221840c9ad"},{url:"/_next/static/chunks/main-06b5eebbc5251af893da.js",revision:"f22f24e4d4d47021ed25fd9974986b0b"},{url:"/_next/static/chunks/pages/404-3774e9f56c6961c0e22a.js",revision:"3f10f3f93f54a8894275a7ce804ac2e1"},{url:"/_next/static/chunks/pages/_app-f0eb9911c9f20c530e31.js",revision:"42a00f5c3dd4f597cece334488fa0140"},{url:"/_next/static/chunks/pages/_error-95cfdb3a4a77da692881.js",revision:"3680533d4746ea126201f1aab0b2cacd"},{url:"/_next/static/chunks/pages/about-us-80c9d23dde6226de61ca.js",revision:"6d89cbbce9cd9a342030ee499913213b"},{url:"/_next/static/chunks/pages/about-us/%5Bname_url%5D-5774ae61ce4d73623b2a.js",revision:"ea21394bbe7b23181f5cf8d843500c71"},{url:"/_next/static/chunks/pages/account-3f3e81789baec7ee9c37.js",revision:"a9613171d5d52b556d1ae176da58f57f"},{url:"/_next/static/chunks/pages/account/confirm-ffdc700b8f503dddaaeb.js",revision:"debfddaf5e6acc67a517de17d20f282e"},{url:"/_next/static/chunks/pages/account/confirm/%5Btoken%5D-e368a329d105a8e8ceb0.js",revision:"5cfc50911c644172a389744ed38897fe"},{url:"/_next/static/chunks/pages/account/signature-1c0b0d049c63e47aaad6.js",revision:"c7a517f4099a578a899017324d103350"},{url:"/_next/static/chunks/pages/activity-263b6b3d6573a1374476.js",revision:"fb05690693c09d00cc7ecd55454cd998"},{url:"/_next/static/chunks/pages/admin-90272736d78b2af6d01e.js",revision:"95c7abfc07f9706a575b8f8bba1e02f7"},{url:"/_next/static/chunks/pages/admin/%5Bcontact-submissions%5D/%5Bid%5D-2a71f161a627e1dd48d1.js",revision:"493c2cb859fa734f61a64e81356412fb"},{url:"/_next/static/chunks/pages/admin/applications-f94f373c5ca360739f52.js",revision:"0487fcdaa245e71c616f4f2bcbbb9d53"},{url:"/_next/static/chunks/pages/admin/appraisals-2c37d7eccb5d1b0f14b2.js",revision:"0af1572a52ea9ca1aaaa6b43c89db7d0"},{url:"/_next/static/chunks/pages/admin/files-6e4c8b1badead1d84fec.js",revision:"76e9c428cd2ba70f91b5bcb1c6b98f73"},{url:"/_next/static/chunks/pages/admin/inspections-ff1d46cccf8562194e08.js",revision:"990777f6014d8be0b269b68f00dafeff"},{url:"/_next/static/chunks/pages/admin/leases-1a9313d3fe1163700d74.js",revision:"646c4d3e30dfcbeecaf119448ee4d517"},{url:"/_next/static/chunks/pages/admin/media-70f8c17385e2491da715.js",revision:"4190314b2c2d713a2e953cb2eeb976c7"},{url:"/_next/static/chunks/pages/admin/properties-f364069811ab5bb24170.js",revision:"8c09f03ea9524583408ab887248f0e48"},{url:"/_next/static/chunks/pages/admin/settings-cbe35cf175e99dc6dfa4.js",revision:"d11da97897fc028c4051700bb0f4d10e"},{url:"/_next/static/chunks/pages/admin/test/server-crashes-c360ba759752d025b497.js",revision:"f9dd489ffdc158b55eeef87c5e6597af"},{url:"/_next/static/chunks/pages/admin/typography-136fd324fa17d62b6789.js",revision:"d5469e6355216da67878694b1c54a5f8"},{url:"/_next/static/chunks/pages/contact-a93821df364ea282253c.js",revision:"84f61535b2461ad4564c995a5b12996d"},{url:"/_next/static/chunks/pages/find/property/%5Bid%5D-bd15e7fc3f579b8b82c9.js",revision:"e7fdb0b337c8de1780c0befec7741988"},{url:"/_next/static/chunks/pages/freeappraisal-21af9779b4a626da7ffd.js",revision:"ec2afaeaeaf517bae469495e52b88a84"},{url:"/_next/static/chunks/pages/index-dca72807f2417d9b2375.js",revision:"5023e8d713a5676d09888350c0a504bf"},{url:"/_next/static/chunks/pages/inspection-0271d0c53d6c78b0a1c2.js",revision:"ad69826980cab47a4a52d95cb9fa9aec"},{url:"/_next/static/chunks/pages/inspection/%5Bid%5D-8a64ddc569795b89f98c.js",revision:"42c0d0337fdf2a9f3f2259bbad00fc4f"},{url:"/_next/static/chunks/pages/landlord-62fdc6bf744746173080.js",revision:"7a8ffe0a6986e1d7e9be6fbf8d3750c3"},{url:"/_next/static/chunks/pages/landlord/appraisals-fe90c8ba61a1d467354c.js",revision:"c60859ff900c17b1f66b62940a80615c"},{url:"/_next/static/chunks/pages/landlord/appraisals/%5Bid%5D-3f374a11ebb033e4de92.js",revision:"ee20c2ad24d7a814501c011a5485343a"},{url:"/_next/static/chunks/pages/landlord/appraisals/add-0a02ecdbc815ba771c74.js",revision:"3e2446a751771d1f755ceb5a515248d4"},{url:"/_next/static/chunks/pages/landlord/fees-e748f465786350d79534.js",revision:"ad354786fc04d331993d4cd9d6797ec6"},{url:"/_next/static/chunks/pages/landlord/leases/%5Bid%5D-1168b6fc53c148145cdb.js",revision:"2567aec91978ccace3d2c7712e094f11"},{url:"/_next/static/chunks/pages/landlord/properties-3343da817833838f6b6b.js",revision:"55e05f743ecac4c4d405a944c0108055"},{url:"/_next/static/chunks/pages/landlord/properties/%5Bid%5D/edit-7b64da2d1e30ce74dc6a.js",revision:"66293b0e9e2a5b72c2855f54230c4e28"},{url:"/_next/static/chunks/pages/landlord/properties/add-82628d04aafa4757599f.js",revision:"24770d77603d101827761242ccb87064"},{url:"/_next/static/chunks/pages/landlord/properties/bulkadd-c419324b6e5798142f8f.js",revision:"d5a0d261a455061b5609577a9af0a36f"},{url:"/_next/static/chunks/pages/landlord/terms-of-engagement-0c5b8ac66d1e2a26778d.js",revision:"3d80062a105b016c6235b194b04007d7"},{url:"/_next/static/chunks/pages/legal-c94e466195f2af7cd2d2.js",revision:"c24833433a37e7fcdacfda88eea5d5e8"},{url:"/_next/static/chunks/pages/legal/privacy-policy-6f8f9b3d04dfc0866434.js",revision:"29f5df9c8f61bfd09abe1bf65f58335a"},{url:"/_next/static/chunks/pages/legal/terms-of-engagement-07b59698ac04e64eb77b.js",revision:"813490ec01e0db0f74a7b3a2db35ee0b"},{url:"/_next/static/chunks/pages/login-105727a74c6c8e547ac1.js",revision:"ea6c18a61b3cba9fafc2a974e20cadbf"},{url:"/_next/static/chunks/pages/messages-8799b40bc843c8950077.js",revision:"2f857b8e4dd50e579654a832718e91b0"},{url:"/_next/static/chunks/pages/property-search-848d86725fa868b5ded8.js",revision:"ec7059c3e5ffbde21326e19aa1e55104"},{url:"/_next/static/chunks/pages/reset-60dd3e8316245035a337.js",revision:"dce4edf3d263ad996202479f8768f6bc"},{url:"/_next/static/chunks/pages/reset/password-07d2f7748f1c93644b04.js",revision:"ae7875932972843849019f669f97331a"},{url:"/_next/static/chunks/pages/reset/password/%5Btoken%5D-66d9228f1c3aa9271621.js",revision:"92f58e231aa61d4b814116cafe3da008"},{url:"/_next/static/chunks/pages/social-f17aa5ab52a99b849064.js",revision:"9fcf2ed3d4081ef009b41b80733a3886"},{url:"/_next/static/chunks/pages/social/chats-060b4571543be5c6ac80.js",revision:"937cda918e6087c896ddc8a007c7d46c"},{url:"/_next/static/chunks/pages/social/chats/chat-758dd53917453dcb1b9a.js",revision:"ec5cf7f2114bc536f8c0f1fb41f34b54"},{url:"/_next/static/chunks/pages/social/friends-310b2d434c9686077f28.js",revision:"f9630ac22ee664523501c97bae0173c3"},{url:"/_next/static/chunks/pages/social/groups-68d895f025ae790aef19.js",revision:"b92ce804ee8a411b142085b6afaca476"},{url:"/_next/static/chunks/pages/tenant-bf907e91fc797f08158f.js",revision:"16a619235c6b78b5f8b010e5d5544a82"},{url:"/_next/static/chunks/pages/tenant/applications/%5Bid%5D-66b2b24f2849557122d7.js",revision:"ac3c05949348159d8b0a8aab1cac4558"},{url:"/_next/static/chunks/pages/tenant/leases-e311bb1314d7f2f16800.js",revision:"5d0ef18ec0616450cf4889f3336b366e"},{url:"/_next/static/chunks/pages/tenant/leases/%5Bid%5D-fbb1910919115343b9f4.js",revision:"1789162f3c3df80c417813f176fa2fe2"},{url:"/_next/static/chunks/pages/tutorials-a9870ebd5187539ff9c7.js",revision:"3ee5cff986a6b765eb9e22a9281b4d3c"},{url:"/_next/static/chunks/polyfills-feb4f67e43b7eaf3abf8.js",revision:"5b4732bfaa282f5c948d975a8699e1cc"},{url:"/_next/static/chunks/webpack-f0380aba075bdd4a6154.js",revision:"a31e276f117f37b208c9cba42ecce21e"},{url:"/_next/static/css/25fc17c8d1563276570b.css",revision:"79f4c4d93df6e8d866a4741ae66f9662"},{url:"/css/customToast.css",revision:"080a99f6e1b1b364ae39a29e4ad21b51"},{url:"/css/geosuggest.css",revision:"71d081779666a18e2757b16aa249764b"},{url:"/css/global.css",revision:"7294805e1e94a856333999f9c0ad4814"},{url:"/css/nprogress.css",revision:"d462b6ca22c36719856106e10f53801c"},{url:"/css/rehouser-fonts.css",revision:"91d7865b321aeebcaccdbf36785b534a"},{url:"/fonts/azo-sans/AzoSans-Bold.otf",revision:"b8f2ee5e72f28178899433cb91119c47"},{url:"/fonts/azo-sans/AzoSans-Bold.ttf",revision:"a4b0c7481bf5f3e12ae73efaed581108"},{url:"/fonts/azo-sans/AzoSans-Bold.woff",revision:"1bf6df8ef8367775fdb64682e16eb3aa"},{url:"/fonts/azo-sans/AzoSans-Regular.otf",revision:"87eeb2d253cb1bbf92f26bcfb76e0887"},{url:"/fonts/azo-sans/AzoSans-Regular.ttf",revision:"6c79f7fd645c0d39b4ca10428237984a"},{url:"/fonts/azo-sans/AzoSans-Regular.woff",revision:"652632abd81aeeb698f941982dce4eab"},{url:"/icons/favicon.ico",revision:"3122f01505642d6a660f6d5bbf91e80f"},{url:"/icons/icon-192x192.png",revision:"129de4cd0351cc746f06eda70c84542d"},{url:"/icons/icon-256x256.png",revision:"c093bdbf1516c33e92d14161edbe3935"},{url:"/icons/icon-384x384.png",revision:"0ccee2bfc299abeedb7471ba412584c7"},{url:"/icons/icon-512x512.png",revision:"64d8635aac6576bc094b0eb52a2fdda5"},{url:"/images/banners/home-page-banner.jpg",revision:"2e0e48b071b2c367665bbd3e7a65704b"},{url:"/images/person-icon.png",revision:"efa5e591a725f0b25bb9772a0641e79c"},{url:"/images/person.png",revision:"c84b28d4ddc12def5b1339f78de11d40"},{url:"/images/private_stock.jpg",revision:"b983f3db98a74446f5b816760714e99b"},{url:"/images/rehouser_logo.png",revision:"3103e2eb1f20c8258709a0ba5ddf7661"},{url:"/images/signatures/rehouser_admin_signature.png",revision:"0c1d791522cd227ececf56aba4c0041f"},{url:"/images/svg/ReHouser_bare_logo.svg",revision:"9a79b61bbe8d96f87e3116c969267336"},{url:"/images/svg/ReHouser_main_logo_original.svg",revision:"8d6647ec43e748dae8ce15d904639eed"},{url:"/images/svg/rehouser_ico_dimensions.svg",revision:"e12a0f3bb58d0c02246feb30be2488af"},{url:"/images/svg/small-deer.svg",revision:"8ce467fcb15154d65b6efcfe7e97edc1"},{url:"/images/team/heath_dunlop.jpg",revision:"26c03b4109d1cc2f4a8653e5b6b0f99e"},{url:"/manifest.json",revision:"73bcea9847c247fa4c57b4a35353fda4"},{url:"/robots.txt",revision:"edf2e421f7ee3479e0266a6792428e85"},{url:"/sitemap.xml",revision:"1fdf389d1f52ccc6d462cc833ff584a3"},{url:"/static/ReHouser_bare_logo.ico",revision:"746ab3537a8ff8dff64ff648e13d053c"},{url:"/static/favicon.ico",revision:"85dc1b580b39e9d9f3e2e8e32b80372c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.StaleWhileRevalidate({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
