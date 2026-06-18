(function(){
  const menu=document.querySelector('.mobile-menu');
  const nav=document.querySelector('.nav-links');
  if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});}
  document.querySelectorAll('[data-tabs]').forEach(group=>{
    const tabs=group.querySelectorAll('.tab');
    tabs.forEach(tab=>tab.addEventListener('click',()=>{
      const id=tab.dataset.tab;
      const scope=group.parentElement;
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      scope.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
      const content=scope.querySelector('#'+id);
      if(content) content.classList.add('active');
    }));
  });
  const routeResult=document.querySelector('#route-result');
  const routeCopy={
    db:['税研ウェブサービスへ','税務通信データベース、経営財務データベース、税務QAデータベース、国際税務データベースをご利用の方はこちらです。','ログインする'],
    club:['各種会員サイトへ','企業懇話会、税理士懇話会、国際税務研究会など、会員限定コンテンツや勉強会をご利用の方はこちらです。','会員サイトへ'],
    seminar:['税研Webセミナーへ','Webセミナーの視聴、受講履歴、契約者向け動画を確認したい方はこちらです。','視聴ログイン'],
    store:['オンラインストア・かんたん購入へ','書籍・定期刊行誌・セミナーの購入履歴、請求情報、申込状況を確認します。','マイページへ'],
    links:['ZEIKEN LINKSへ','事業承継・M&A関連の情報、買手登録、譲渡向け個別勉強会をご利用の方はこちらです。','LINKSへ'],
    unknown:['契約状況を確認します','契約商品、会社名、メールアドレスから正しいログイン先をご案内します。','問い合わせる']
  };
  document.querySelectorAll('[data-routes] .route-option').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-routes] .route-option').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const data=routeCopy[btn.dataset.route]||routeCopy.db;
      if(routeResult){routeResult.innerHTML=`<strong>${data[0]}</strong><p>${data[1]}</p><a class="btn btn-primary" href="#">${data[2]}</a><a class="btn btn-secondary" href="contact.html">ログインできない</a>`;}
    });
  });
  const purposeTitle=document.querySelector('#purpose-title');
  const purposeMap={
    document:['資料請求','必要な資料を選択してください','商品ページから遷移した場合、対象商品は自動で選択されます。'],
    trial:['無料お試しID','お試ししたいサービスを選択してください','税務通信データベースなど、利用目的に応じたIDをお送りします。'],
    login:['ログインサポート','ログインできないサービスを選択してください','ID・パスワード・ログイン先の確認をサポートします。'],
    memberprice:['会員価格','会員価格を利用したいセミナーを選択してください','会員種別に応じた申込導線をご案内します。'],
    contract:['契約内容変更','変更したい内容を選択してください','住所・担当者・支払方法などの変更を受け付けます。'],
    cancel:['解約相談','契約状況を確認します','解約前に利用状況・更新日・代替プランをご確認いただけます。'],
    article:['記事内容の確認','確認したい記事情報をご入力ください','掲載号、記事名、URLなどがあるとスムーズです。']
  };
  document.querySelectorAll('[data-purpose] .purpose-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-purpose] .purpose-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const data=purposeMap[btn.dataset.purposeId]||purposeMap.document;
      if(purposeTitle){purposeTitle.innerHTML=`<span class="tag tag-red">${data[0]}</span><h2>${data[1]}</h2><p>${data[2]}</p>`;}
    });
  });
})();

/* No.7 セミナー申込：会員価格の面内適用デモ */
(function(){
  var btn=document.getElementById('apply-member');
  if(!btn) return;
  btn.addEventListener('click',function(){
    var alert=document.getElementById('m-alert');
    var applied=document.getElementById('m-applied');
    var amt=document.getElementById('cart-amt');
    var total=document.getElementById('cart-total');
    if(alert) alert.classList.add('hide');
    if(applied) applied.classList.add('show');
    if(amt){amt.innerHTML='<span class="amt was">33,000円</span>26,400円';}
    if(total) total.textContent='26,400円';
    btn.textContent='会員価格を適用済み';
    btn.disabled=true;
    btn.style.opacity='.6';
  });
})();
