if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,f)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-291eff0d"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Wzefa7dwnZBZto2QV-emR/_buildManifest.js",revision:"66f54eb8600fa7464b5384202e0ceaad"},{url:"/_next/static/Wzefa7dwnZBZto2QV-emR/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/09b618660fa849d246a35009b8b2d24eba170681.b016bb66a4e9a50e5749.js",revision:"8529a8dee83b1748f027c7d4b804dfb0"},{url:"/_next/static/chunks/09e7e196bf6f1d7674816ab240705f755610532b.a50a579969bdaaff7628.js",revision:"9acf6ea43904983be07c95df2faab88d"},{url:"/_next/static/chunks/114.7c218c3308aaf79edfff.js",revision:"f3009172a17a096b16f3629cd5c326a2"},{url:"/_next/static/chunks/115.d56c4c7b191bd77bb054.js",revision:"958e6ddc16c00657ffb248387a336fcb"},{url:"/_next/static/chunks/116.3a50ef6f3590e2dc969b.js",revision:"1e22906fac187258b96daaf5452e1766"},{url:"/_next/static/chunks/117.8d0dd21546eb34b5eb3a.js",revision:"c9f583935bb949a00ab46c972740d029"},{url:"/_next/static/chunks/118.281dfd95e87f8b600a05.js",revision:"996d3c026f2d04432a5b41138ac96f24"},{url:"/_next/static/chunks/119.0db073c580e8d21b13d8.js",revision:"6f62c9e7534b1b473692898f10280172"},{url:"/_next/static/chunks/120.2e09c8c2ba5192494a04.js",revision:"1c8eec6dd66e3ee7078b4ddc586274dc"},{url:"/_next/static/chunks/17c823672aaeeb3fa8620492d6aec03de873a0e6.56036ffedae75621d90d.js",revision:"50a72d6e1fdc3343f11a7dc9d5107c24"},{url:"/_next/static/chunks/1bfc9850.2a1764eafb7d6a055248.js",revision:"3f0e00942c00405b58219e517acb96fe"},{url:"/_next/static/chunks/1d5e85c7089d56cb081676a9c6264b0bf0883c02.85310b2f24fc76ff7e89.js",revision:"7467561ce0b8d454bd0106d7968202a7"},{url:"/_next/static/chunks/1feb7162aabf72ccfcd74518116dc9f0e621a781.5155355a351c70b696cb.js",revision:"817ef9f92b3fe83cc4cb16c43582611e"},{url:"/_next/static/chunks/210e6083.b64928b20ecc38ec6a3f.js",revision:"0611098bb7c39b927833d3aaa1d45be5"},{url:"/_next/static/chunks/264c7d3b98211805d1bc88221debc879bf549e5a.7d8d8e394510eaf087ed.js",revision:"c4f540b5964e9c4e90dbb94803b8c1d5"},{url:"/_next/static/chunks/2cf1c4cd6b89dd850722573865743bfe232fea90.165b2b643a8c17307b22.js",revision:"0b370308eba0a0a63d2a3fda89e88dc2"},{url:"/_next/static/chunks/43b7d44fefe48548cd1c639b24c3aa644640a6d9.c549f64882b2d0a2dae1.js",revision:"e07b3bd511b4470724654e6855170a25"},{url:"/_next/static/chunks/43e7e0a7eb10b115f6312d2fa08b20dfe36f3b4d.fb73180955a2ec6c6338.js",revision:"2a4fc075d2c13b3edb3b29f44a09ba3e"},{url:"/_next/static/chunks/5040832013ea8662c0f597a23bc693a41e81f61e.f93c9f9eb9ea6be468e4.js",revision:"e21ba11b1227faa86fd3133a0ea9e18e"},{url:"/_next/static/chunks/51eada634bc24fc1383c90dc9e7259b9447f3749.ba89b234eef043ab2753.js",revision:"befccd4b4ceea2de3d35ddebf720c061"},{url:"/_next/static/chunks/522ef3dde21c9ae4a39d13160ce3fe6ddc89ff6c.a237f4c2009e8185e4a0.js",revision:"5a09dd40d1cbc3ee74f0405def1e9894"},{url:"/_next/static/chunks/67dbac3da6e2424aa40b5364e3098f519d878629.adcbb2c1f981f3af8415.js",revision:"055777f194b24751f25fd789753b7e2e"},{url:"/_next/static/chunks/75fc9c18.f1b4cb0bfd40d9f72df1.js",revision:"86a3d8f2932543af6901418dbbcc2ca1"},{url:"/_next/static/chunks/77fce58c129ff105d3b90c1655bea57acf724f72.eb6af42eaaad95ad68f2.js",revision:"cfd4323fddd9842a00b1b5af12cb827d"},{url:"/_next/static/chunks/84c042bb.0f4bf3743533a6eb4f2d.js",revision:"3aacfcfb8f5578884d20813f6f5e3a3a"},{url:"/_next/static/chunks/895a5ca8968d1d4b8401e2ccf8ffba6e0a54c1da.5924619451810285e58f.js",revision:"534cc74caf4ce7c42ae2e656b0595a28"},{url:"/_next/static/chunks/8bea4f1528b228454ef0c435409877cb974fcf5a.4e07a3950fec066458ea.js",revision:"61f4853db183e463e6247e4dd1612ef7"},{url:"/_next/static/chunks/a94706e6ed7f6de145c3099bf44aa4bad6b2f178.c1a077ddaef5a1efc114.js",revision:"5392f88f7285b4f3b4d638bf66683682"},{url:"/_next/static/chunks/b4a3d7e5fab2faa81190c3d676dd00ba81a8e2c7.f313eb1e5647c3c68593.js",revision:"a9aaadf0a49ea5fa9db3ffed6f0ff169"},{url:"/_next/static/chunks/bee240a3.d7e41399e593af615234.js",revision:"f4d5bd36227376695d57a691763585a8"},{url:"/_next/static/chunks/bfdcdd3a10320d8936a2b6c01fd3213cb6a8f310.22dc1b83dd8740faf9fc.js",revision:"e51ce3840d8b224e25583c4012b1b285"},{url:"/_next/static/chunks/c26f80659c6155100d62745dbc0476a2b804957b.2e89e3713acc52bf17f1.js",revision:"b056c99faa8bc19b256f23ea7892a5e3"},{url:"/_next/static/chunks/c2b53a7f5e5849195c5bd3d67cf6a9666ff38f6c.6fa650230410614cbe3a.js",revision:"6bb96bb20aacc62fff6998aeb6f720cd"},{url:"/_next/static/chunks/c6d4c7638d70d26dda5ae4d0bcc4c223963a3f93.3d13b478b28716b0e885.js",revision:"b7134bf97066c7843453c02ae435b927"},{url:"/_next/static/chunks/c7130bfe5c7401b81467d2748ca79db7aa58352b.49be809f3e5312a244a7.js",revision:"56382b13494b5cd160d21373db2fd494"},{url:"/_next/static/chunks/c7838f56e2ac55505b655519662d38d8f9ac19f8.9db8665d0c8f51fbe5d1.js",revision:"38b1880c7b8f1d058a6f8ff28a959ba9"},{url:"/_next/static/chunks/c9c6fe98.4794dd230cb267825d6e.js",revision:"5d414b0e8d50d2f511d93237449f078c"},{url:"/_next/static/chunks/ca31e254b3128424776b2f7f05b31dc5ff7dd131.c3125f71b0b50d2d5794.js",revision:"95a21f8f9775ee5b1aa85789da23d696"},{url:"/_next/static/chunks/caaeed668462b2e02fa76d2a172679df5ccaaa58.adb4911580735195f9db.js",revision:"6da158d84b373523acb5c7dc3171162d"},{url:"/_next/static/chunks/cabfd3c9604b75e56af11176d15bc3aa8df471a5.1f2c35cbc6b8fa60093d.js",revision:"3b089aac63260860f22bacbfeeed921b"},{url:"/_next/static/chunks/d3f4d7e4431470ad03759645f0881805bc330ff4.497c05dd7511b347b8cb.js",revision:"b1aeb260da199eacc38e8c05aa3db023"},{url:"/_next/static/chunks/d542198aa9718bc214b6f1e80070b642e416efda.87accf1360f006d135b9.js",revision:"398ecb53b05b91c4926ef04277df3fac"},{url:"/_next/static/chunks/d65fc3f9ae1a712d394dcdff8ee2b635359a46dd.e9b3c2c4af9217b2d7c1.js",revision:"a1ac708913982243d3f4322b19d5a396"},{url:"/_next/static/chunks/d7ca8ffd108a5bd1b7fe96da7a369ebbdcd10f42.7ecdab5a0cc060d4440f.js",revision:"1801669c907d93e7066d96cde85f1ab7"},{url:"/_next/static/chunks/df9806cc4ca972869211c95ab92df69eb6c1435d.5ef568a82eb3e1218361.js",revision:"4eb8fc0b4efb0dc392dd9e7fd1b7fc8c"},{url:"/_next/static/chunks/e520c3b9.e4fc2ce913188aac3141.js",revision:"68d4947649fcd1dc50b7afd590bc46bf"},{url:"/_next/static/chunks/e6ee45d3b5f8f4a2b4cc24b787aa8598870aff7a.019f48486f5582d0765c.js",revision:"5f8ab616eaa62505d001e109e2d73b5f"},{url:"/_next/static/chunks/e943d6d2ed02f86f9b3406c3a1da39222e08343d.dd63ddfc396bf376deb5.js",revision:"48381abcb695dfd630b91a5cfeca8ab2"},{url:"/_next/static/chunks/f057a831.52c0229fbb4e767a61b4.js",revision:"4c5e1c46e78bd7ba5917afb3b96b5df6"},{url:"/_next/static/chunks/f7de8c3cad3cabf3d23baa5fcb2a4d18b3143d88.8b38443d9f1a349f3e97.js",revision:"c606d7fd1fc2dd091203f5f3733a9eb4"},{url:"/_next/static/chunks/f9fff01a.ef7db6773a41134ed39c.js",revision:"fb2855d3e66b1362c5f43e1b28cea3f2"},{url:"/_next/static/chunks/fc90fdef8ef3c400fe21fd358849979e977218ee.1a4d41d7c2d2a87f1ad3.js",revision:"6258a42f8087cb278ba450975af747bb"},{url:"/_next/static/chunks/framework.8bfd6b1b2db11ab187a3.js",revision:"ed12155bb236e591294042221840c9ad"},{url:"/_next/static/chunks/main-c5c398a65518902d9617.js",revision:"3ed28bbc5bf8c108d3f288e54ab85eeb"},{url:"/_next/static/chunks/pages/404-3c905d2c2b6f49a22676.js",revision:"eb893f9eafed8619ac1f392c1a7fb6d8"},{url:"/_next/static/chunks/pages/_app-ce495a6d062f383cfb4d.js",revision:"59e322b0e9663c91e72628d61fb070dc"},{url:"/_next/static/chunks/pages/_error-12166e35a3b1d3267ed8.js",revision:"3769cf20bb77ccf2e8be73d02450aee3"},{url:"/_next/static/chunks/pages/about-us-9caa7df4d6f5aaf0730c.js",revision:"4cfd4ab6ac4687796f6cd103e092a329"},{url:"/_next/static/chunks/pages/about-us/%5Bname_url%5D-a7d56493b7518b8a47cb.js",revision:"f451b33c03946fae2e8f60f3def9c937"},{url:"/_next/static/chunks/pages/account-07f6a2eb0662d1295567.js",revision:"6fb8a8cee7a4f66fd1ab63510f0f70e1"},{url:"/_next/static/chunks/pages/account/confirm-1226f3a5c9908540ef48.js",revision:"d3dcd29f33ce5322958f0775db556d01"},{url:"/_next/static/chunks/pages/account/confirm/%5Btoken%5D-94c82e409b5e3bf1683d.js",revision:"6094bdfb7815bdf6d39da58f852ad450"},{url:"/_next/static/chunks/pages/account/signature-8df2f52752bed9373a73.js",revision:"5882739489767cd4304f3afa1f57ed9b"},{url:"/_next/static/chunks/pages/activity-255f8bea38ab795384bf.js",revision:"becb1f2f6f686efcfe382215a646f967"},{url:"/_next/static/chunks/pages/admin-9fd0945269ffb1664bce.js",revision:"90fffa7e475b03d6da03ee09d37dfa95"},{url:"/_next/static/chunks/pages/admin/%5Bcontact-submissions%5D/%5Bid%5D-5c357591db502c76b9ca.js",revision:"5f29bda40c468f572df76369b7618524"},{url:"/_next/static/chunks/pages/admin/applications-c75095659690f38cab02.js",revision:"ca7df41ad5e94f6da3bc3530fb155b01"},{url:"/_next/static/chunks/pages/admin/appraisals-f000b9240dc99aa234b6.js",revision:"5cb8c81a8ac3748b4dffb16f0729dc0e"},{url:"/_next/static/chunks/pages/admin/files-897924c2d8d76e2b8d5a.js",revision:"fcbc0ffa1fb8725dfbdbc50e5c67f250"},{url:"/_next/static/chunks/pages/admin/inspections-3e257190b03d9b7c1e14.js",revision:"99809c6e008992cc419f6fa827c6b64e"},{url:"/_next/static/chunks/pages/admin/leases-6462c8cc926ab5fb8752.js",revision:"8651373bdfb4572859ecc3e3d0089ce8"},{url:"/_next/static/chunks/pages/admin/media-7e610a1c90bbacd2950a.js",revision:"6cb58bef0909d8d5022d24ccf5375829"},{url:"/_next/static/chunks/pages/admin/properties-896c73edb73540b10ae2.js",revision:"5778108e59c8907625906d237ed4aae4"},{url:"/_next/static/chunks/pages/admin/settings-0478762d075606de9d2a.js",revision:"a5d7f8063c8b9d9b922989e5b3351b9f"},{url:"/_next/static/chunks/pages/admin/test/server-crashes-97e29cf5828027a3a9d3.js",revision:"a9ce5b41453955c59eb0605437f8fdc0"},{url:"/_next/static/chunks/pages/admin/typography-798a043d9fbe791806bc.js",revision:"f2ad724012fbcbeee55b1e520500ff4b"},{url:"/_next/static/chunks/pages/contact-ae600deb3e286d052e89.js",revision:"7f04fc49645de77403112f22b943aac2"},{url:"/_next/static/chunks/pages/find/property/%5Bid%5D-561033fde4358ec69bb9.js",revision:"ad1744bfd6fecb5da13453f93610211e"},{url:"/_next/static/chunks/pages/freeappraisal-ceaea3c97c4a415c16c5.js",revision:"22aa08372631602ccdfae9bdfcbc79b3"},{url:"/_next/static/chunks/pages/index-f451792716fc667bfd80.js",revision:"bd33cc53509c36138411e2cd17cde855"},{url:"/_next/static/chunks/pages/inspection-d7e77f3a3598fc7d6ebd.js",revision:"6f0e5d09a9bc57f6261a0a968dbb13aa"},{url:"/_next/static/chunks/pages/inspection/%5Bid%5D-d02c08e87673495175cb.js",revision:"00ef21e53c9f78158d22cfd314ca1891"},{url:"/_next/static/chunks/pages/landlord-84c1e4782a34cf38c743.js",revision:"396e9bb251ed0bb63820209091544551"},{url:"/_next/static/chunks/pages/landlord/appraisals-885ef799c17765f8e7a2.js",revision:"2b88c6002cef7f88e8c7716e62048e98"},{url:"/_next/static/chunks/pages/landlord/appraisals/%5Bid%5D-b6fed745d794caf5c85b.js",revision:"3129909fc7d62af49b6bee2eac1b4ecc"},{url:"/_next/static/chunks/pages/landlord/appraisals/add-73be1a656905793f0ffe.js",revision:"73922e25b810e0b3e4e810ff06fb2784"},{url:"/_next/static/chunks/pages/landlord/fees-c214cc3c0f84009a89d1.js",revision:"e80a85cdf47e60bf6d3954ab8a044763"},{url:"/_next/static/chunks/pages/landlord/leases/%5Bid%5D-230d37ac1d867dcdeada.js",revision:"319211f82c50efcdc5c1743b286de1ba"},{url:"/_next/static/chunks/pages/landlord/properties-5623606f2e52b7f4f1c4.js",revision:"3999f49f8a312fb6314a6aec480da7ed"},{url:"/_next/static/chunks/pages/landlord/properties/%5Bid%5D/edit-70efef3f48a8ca385bcc.js",revision:"883f2e4fe8d0c527c7366cbf90712a14"},{url:"/_next/static/chunks/pages/landlord/properties/add-03ce65ae66c94f158503.js",revision:"549665ff6f31e4b34d2fb32082e12bdb"},{url:"/_next/static/chunks/pages/landlord/properties/bulkadd-d0abe119cd16bf26530e.js",revision:"07c37778c26374b23ad5283c37c7bf4c"},{url:"/_next/static/chunks/pages/landlord/terms-of-engagement-0db60fe827cf69977043.js",revision:"f7668c91cfb328839dfc6dde8fa62339"},{url:"/_next/static/chunks/pages/legal-f935c68566bffd301c40.js",revision:"3083f99dc275ac8d2fdfff32ca9cf889"},{url:"/_next/static/chunks/pages/legal/privacy-policy-aa5c80bb66a75eecc34b.js",revision:"682b1444eecdd9b21e258d5e16fd679f"},{url:"/_next/static/chunks/pages/legal/terms-of-engagement-10e409077a2e2bd3e558.js",revision:"b7c6a81f23d6bc5008136cfd36399b8f"},{url:"/_next/static/chunks/pages/login-107005ce17755caeb1ff.js",revision:"1be16edec5fcb81675e275e13052fa17"},{url:"/_next/static/chunks/pages/messages-62bd98a565237c1ab4e3.js",revision:"296e5d33633e7652a4f7c7a8fa38e0c0"},{url:"/_next/static/chunks/pages/property-search-69f0315ef6849fefd573.js",revision:"471e3241da07f73ae12ea5a47adf357b"},{url:"/_next/static/chunks/pages/reset-3f05f5bebbe4621f6055.js",revision:"d99ba6699e7b3362960e04811906cccf"},{url:"/_next/static/chunks/pages/reset/password-2fdcd7c80194d70c072c.js",revision:"e1dcdd1bbdbd77f0156272c92867320b"},{url:"/_next/static/chunks/pages/reset/password/%5Btoken%5D-1553966af63a169d6517.js",revision:"bc453e03f551274ff6a7234917e1bc46"},{url:"/_next/static/chunks/pages/set-theme-a5b70bcf60e07a4f1bc4.js",revision:"820bcc06406c59eda6e1e9fe2b9ce55d"},{url:"/_next/static/chunks/pages/social-2860261577832a3b51f9.js",revision:"d24cec3b191968f3c6008c8f8631bc5c"},{url:"/_next/static/chunks/pages/social/chats-2d98f9d61c43aab40d21.js",revision:"5a12477acc1921c23c02d6712578068e"},{url:"/_next/static/chunks/pages/social/chats/chat-4acac367a8a4e4fdb3ed.js",revision:"362454e0d390ee05c862b19e765817f0"},{url:"/_next/static/chunks/pages/social/friends-d8d78ad6b80ce27064f6.js",revision:"7e06cd55b6822ba5404fdaf092190e8d"},{url:"/_next/static/chunks/pages/social/groups-d1e7b43d27a0a7716398.js",revision:"29fc3692bff0bb68791019154bd745a7"},{url:"/_next/static/chunks/pages/tenant-282e2359604a9d4c391b.js",revision:"c54a3f69c9c59d82d0df572c7ac6fba8"},{url:"/_next/static/chunks/pages/tenant/applications/%5Bid%5D-ef713ad490bf6cec31cc.js",revision:"0acf0b9cd3fe294b0a2ddd6dc0f083c9"},{url:"/_next/static/chunks/pages/tenant/leases-c6d0fe723ab710412972.js",revision:"f99b0807c77dc31ead9180b789193d77"},{url:"/_next/static/chunks/pages/tenant/leases/%5Bid%5D-52a661d45a0fc9cfb681.js",revision:"95a7fda24dad145b45bbbd1423ed5f61"},{url:"/_next/static/chunks/pages/tutorials-f76781a2d57d6a59c96b.js",revision:"79f9fde0ad9d0e06e0fe631d620bc2a8"},{url:"/_next/static/chunks/polyfills-4ce0d6b7147bd00bf15f.js",revision:"1277d0c36cdae4b96a299a6b0aa10768"},{url:"/_next/static/chunks/webpack-0e585032b2b245664ee7.js",revision:"d013fd068e45b9e758776b6d9a1e9d7c"},{url:"/_next/static/css/25fc17c8d1563276570b.css",revision:"79f4c4d93df6e8d866a4741ae66f9662"},{url:"/css/customToast.css",revision:"080a99f6e1b1b364ae39a29e4ad21b51"},{url:"/css/geosuggest.css",revision:"71d081779666a18e2757b16aa249764b"},{url:"/css/global.css",revision:"7294805e1e94a856333999f9c0ad4814"},{url:"/css/nprogress.css",revision:"d462b6ca22c36719856106e10f53801c"},{url:"/css/rehouser-fonts.css",revision:"91d7865b321aeebcaccdbf36785b534a"},{url:"/fonts/azo-sans/AzoSans-Bold.otf",revision:"b8f2ee5e72f28178899433cb91119c47"},{url:"/fonts/azo-sans/AzoSans-Bold.ttf",revision:"a4b0c7481bf5f3e12ae73efaed581108"},{url:"/fonts/azo-sans/AzoSans-Bold.woff",revision:"1bf6df8ef8367775fdb64682e16eb3aa"},{url:"/fonts/azo-sans/AzoSans-Regular.otf",revision:"87eeb2d253cb1bbf92f26bcfb76e0887"},{url:"/fonts/azo-sans/AzoSans-Regular.ttf",revision:"6c79f7fd645c0d39b4ca10428237984a"},{url:"/fonts/azo-sans/AzoSans-Regular.woff",revision:"652632abd81aeeb698f941982dce4eab"},{url:"/icons/favicon.ico",revision:"3122f01505642d6a660f6d5bbf91e80f"},{url:"/icons/icon-192x192.png",revision:"129de4cd0351cc746f06eda70c84542d"},{url:"/icons/icon-256x256.png",revision:"c093bdbf1516c33e92d14161edbe3935"},{url:"/icons/icon-384x384.png",revision:"0ccee2bfc299abeedb7471ba412584c7"},{url:"/icons/icon-512x512.png",revision:"64d8635aac6576bc094b0eb52a2fdda5"},{url:"/images/banners/home-page-banner.jpg",revision:"2e0e48b071b2c367665bbd3e7a65704b"},{url:"/images/person-icon.png",revision:"efa5e591a725f0b25bb9772a0641e79c"},{url:"/images/person.png",revision:"c84b28d4ddc12def5b1339f78de11d40"},{url:"/images/private_stock.jpg",revision:"b983f3db98a74446f5b816760714e99b"},{url:"/images/rehouser_logo.png",revision:"3103e2eb1f20c8258709a0ba5ddf7661"},{url:"/images/signatures/rehouser_admin_signature.png",revision:"0c1d791522cd227ececf56aba4c0041f"},{url:"/images/svg/ReHouser_bare_logo.svg",revision:"9a79b61bbe8d96f87e3116c969267336"},{url:"/images/svg/ReHouser_main_logo_original.svg",revision:"8d6647ec43e748dae8ce15d904639eed"},{url:"/images/svg/rehouser_ico_dimensions.svg",revision:"e12a0f3bb58d0c02246feb30be2488af"},{url:"/images/svg/small-deer.svg",revision:"8ce467fcb15154d65b6efcfe7e97edc1"},{url:"/images/team/heath_dunlop.jpg",revision:"26c03b4109d1cc2f4a8653e5b6b0f99e"},{url:"/manifest.json",revision:"73bcea9847c247fa4c57b4a35353fda4"},{url:"/robots.txt",revision:"edf2e421f7ee3479e0266a6792428e85"},{url:"/sitemap.xml",revision:"1fdf389d1f52ccc6d462cc833ff584a3"},{url:"/static/ReHouser_bare_logo.ico",revision:"746ab3537a8ff8dff64ff648e13d053c"},{url:"/static/favicon.ico",revision:"85dc1b580b39e9d9f3e2e8e32b80372c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.StaleWhileRevalidate({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
