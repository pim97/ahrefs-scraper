const Scrappey = require('scrappey-wrapper');

/**
 * Check out our documentation here for more information: https://wiki.scrappey.com/
 * Your key can be found here: https://app.scrappey.com/#/
 */
const SCRAPPEY_API_KEY = 'API_KEY';
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

/**
 * Scrappey.com is a proxy-wrapper for browsers, it allows you to run browser actions and execute javascript on any website.
 * with advanced options such as caching, proxy rotation, anti-bot and more.
 */
async function run() {

    /**
     * For all session options check: https://wiki.scrappey.com/getting-started#78f3fd5551724a78b12d548e95485bbe
     * We allow for multiple sessions to be created, each session has a different proxy and user-agent and unique fingerprint.
     */
    const session = await scrappey.createSession({})

    /**
     * Executes the browser actions requested
     */
    const result = await scrappey.get({
        "cmd": "request.get",
        "url": "https://ahrefs.com/backlink-checker?input=yep.com",
        "interceptFetchRequest": "https://ahrefs.com/v4/stGetFreeBacklinksList",
        "browserActions": [
            {
                "type": "solve_captcha",
                "captcha": "turnstile"
            }
        ]
    })

    /**
     * Example response
     * 
     * {
    solution: {
        verified: true,
        title: 'Free Backlink Checker by Ahrefs: Check Backlinks to Any Site',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0',
        innerText: '',
        localStorageData: {},
        cookies: [ [Object], [Object] ],
        response: '["TopBacklinks",{"topBacklinks":{"backlinks":[{"anchor":"Learn more about Yep","domainRating":91,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"","textPre":"","title":"Ahrefs - SEO Tools & Resources To Grow Your Search Traffic","urlFrom":"https://ahrefs.com/","urlTo":"https://yep.com/about","inRendered":false,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep.com","domainRating":91,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"","textPre":"2.","title":"21 Great Search Engines You Can Use Instead Of Google","urlFrom":"https://www.searchenginejournal.com/alternative-search-engines/271409/","urlTo":"https://yep.com/","inRendered":true,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"90% of its ad revenue","domainRating":93,"edu":false,"gov":false,"httpCode":200,"redirectChain":[{"url":"https://yep.com/about","urlNew":"None","redirectCode":308,"mustBeGray":false,"httpCodeCross":false,"chainDestinationChanged":false,"hasDelReason":false,"delReasonTitle":"None","delReasonKey":"None","lostRedirectReason":"None","isLost":true}],"text":true,"textPost":"with content creators. With this model, Yep aims to encourage","textPre":"beta, Yep, is unique from other platforms as it shares","title":"The Top 11 Search Engines, Ranked by Popularity","urlFrom":"https://blog.hubspot.com/marketing/top-search-engines","urlTo":"https://yep.com/about/","inRendered":true,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep","domainRating":78,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":", the latest search engine that rewards and compensates content","textPre":"","title":"7 Best AI Search Engines to Use as Google Alternatives","urlFrom":"https://geekflare.com/best-ai-search-engines/","urlTo":"https://yep.com/","inRendered":true,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep","domainRating":90,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"comes with multiple AI capabilities that make the search experience","textPre":"","title":"Best AI tools of 2023 | TechRadar","urlFrom":"https://www.techradar.com/best/best-ai-tools","urlTo":"https://yep.com/","inRendered":true,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"32. YEP","domainRating":63,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"","textPre":"","title":"Top 10 Search Engines in the World + 46 Google Alternatives","urlFrom":"https://www.stanventures.com/blog/top-search-engines-list/","urlTo":"https://yep.com/","inRendered":false,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep.com","domainRating":93,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"","textPre":"","title":"Liste von Websuchmaschinen – Wikipedia","urlFrom":"https://de.wikipedia.org/wiki/Liste_von_Websuchmaschinen","urlTo":"https://yep.com/","inRendered":false,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"not to store","domainRating":84,"edu":false,"gov":false,"httpCode":200,"redirectChain":[{"url":"https://yep.com/privacy","urlNew":"None","redirectCode":308,"mustBeGray":false,"httpCodeCross":false,"chainDestinationChanged":false,"hasDelReason":false,"delReasonTitle":"None","delReasonKey":"None","lostRedirectReason":"None","isLost":true}],"text":true,"textPost":"users’ search history or IP addresses.","textPre":"encourage new creators to join the space. Yep also claims","title":"15 Top Search Engines to Try | Built In","urlFrom":"https://builtin.com/consumer-tech/search-engines-list","urlTo":"https://yep.com/privacy/","inRendered":true,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep","domainRating":40,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"","textPre":"","title":"Buscadores de Internet: ¿Qué son?, y cómo funcionan.","urlFrom":"https://www.seoenmexico.com.mx/blog/buscadores-de-internet/","urlTo":"https://yep.com/","inRendered":false,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep","domainRating":61,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":"は、SEOツールでお馴染みのAhrefs（エイチレフス）が開発したとあってか、各所で耳目を集めていま
        す。特徴は、レベニューシェア型であること。コンテンツ配信者やクリエイターに9割の広告収入を渡しているといいます。比較的、Googleの検索結果に近い印象を覚えつつ、実際は、GoogleのAPIを使わずに、自社のインデ
        ックスやデータセンターを運用しているようです。","textPre":"","title":"検索エンジンの種類を一覧で比較！おすすめや最新情報も紹介","urlFrom":"https://www.sungrove.co.jp/search-engine/","urlTo":"https://yep.com/","inRendered":true,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"YEP","domainRating":48,"edu":false,"gov":false,"httpCode":200,"redirectChain":[],"text":true,"textPost":", запущен в июне 2022 года основателем популярного SEO-инструмента Ahrefs","textPre":"","title":"Поисковые системы Украины и мира: 50+ альтернатив гиганту Google • Marketer","urlFrom":"https://marketer.ua/ru/rating-of-search-engines-of-ukraine-and-the-world-2022/","urlTo":"https://yep.com/","inRendered":false,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"Yep","domainRating":53,"edu":false,"gov":false,"httpCode":200,"redirectChain":[{"url":"http://yep.com/","urlNew":"None","redirectCode":308,"mustBeGray":false,"httpCodeCross":false,"chainDestinationChanged":false,"hasDelReason":false,"delReasonTitle":"None","delReasonKey":"None","lostRedirectReason":"None","isLost":true}],"text":true,"textPost":"","textPre":"","title":"Is English Easy to Learn? – RealLife English","urlFrom":"https://reallifeglobal.com/is-english-easy-to-learn/","urlTo":"https://yep.com/","inRendered":true,"inRaw":false,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew":"None","urlToChainDestinationChanged":false,"urlToDelReasonTitle":"None","urlToDelReasonKey":"None","urlToHasDelReason":false,"lost_redirect_reason":"","del_reason":"","lost_redirect_source":"","lost_redirect_new_target":"","isLost":true},{"anchor":"social","domainRating":12,"edu":false,"gov":false,"httpCode":200,"redirectChain":[{"url":"http://yep.com/","urlNew":"None","redirectCode":308,"mustBeGray":false,"httpCodeCross":false,"chainDestinationChanged":false,"hasDelReason":false,"delReasonTitle":"None","delReasonKey":"None","lostRedirectReason":"None","isLost":true}],"text":true,"textPost":"creatures, and they love nothing more than getting some good","textPre":"that hair is a great source of attention. Dogs are","title":"Why Does My Dog Bite My Hair? (8 Reasons)","urlFrom":"https://lovedoges.com/why-does-my-dog-bite-my-hair-8-reasons/","urlTo":"https://yep.com/","inRendered":false,"inRaw":true,"redirectCode":0,"original":true,"urlToMustBeGray":false,"urlToHttpCodeCross":false,"urlToNew"'... 68472 more characters
        },
        timeElapsed: 24205,
        data: 'success',
        session: 'f9a47571-a936-466c-81fc-74a440fbf4ac'
        }
    
     */
    console.log(result)


    /**
     * Destroys the session, this will free up space for other users
     */
    await scrappey.destroySession(session.session)
}

run().catch(console.error);
