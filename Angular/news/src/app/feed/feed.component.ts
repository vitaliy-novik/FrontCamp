import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    pageSize: number = 10;
    displayedNewsNumber: number;
    displayedNews: any[];

    @Input() appData: any;

    @Output() titleChange = new EventEmitter<string>();
    onSourceChanged(name:string) {
        this.titleChange.emit(name);
    }

    constructor() {
        this.displayedNewsNumber = this.pageSize;
        this.displayedNews = this.news.slice(0, this.displayedNewsNumber);
    }

    loadMore() {
        this.displayedNewsNumber += this.pageSize;
        this.displayedNews = this.news.slice(0, this.displayedNewsNumber);
    }

    ngOnInit() {

    }

    news = [
        {
            "source": {
                "id": "nhl-news",
                "name": "NHL News"
            },
            "author": null,
            "title": "Fantasy forward top 100 rankings for 2018-19",
            "description": "NHL.com's fantasy hockey forward top 100 rankings are based on past production and expectations for the rest of the season in standard Yahoo leagues.",
            "url": "https://www.nhl.com/news/fantasy-hockey-top-100-forward-rankings-2018-19/c-282775028",
            "urlToImage": "https://nhl.bamcontent.com/images/photos/304732588/1024x576/cut.jpg",
            "publishedAt": "2019-02-11T22:53:09.1935157Z",
            "content": "NHL.com's fantasy hockey forward top 100 rankings are based on past production and expectations for the rest of the season in standard Yahoo leagues. For more fantasy coverage, visit NHL.com/Fantasy.MORE FANTASY COVERAGE\r\n: Top 200 | 50 'D' | 25 'G' | Power r… [+5259 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Saskatchewan's privacy commissioner finds doctors snooped in Humboldt Broncos patient records | CBC News",
            "description": "Saskatchewan's privacy commissioner has found eight people inappropriately gained access to electronic health records of 10 Humboldt Broncos team members involved in a bus crash last April.",
            "url": "http://www.cbc.ca/news/canada/saskatchewan/privacy-broncos-patient-records-1.5015014",
            "urlToImage": "https://i.cbc.ca/1.4951753.1545260137!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/hko-sask-bus-crash-20180409.jpg",
            "publishedAt": "2019-02-11T22:53:08.2699922Z",
            "content": "Saskatchewan's privacy commissioner has found eight people inappropriately gained access to electronic health records of 10 Humboldt Broncos team members involved in a bus crash last April.\r\nSixteen people were killed and 13 were injured in the crash between … [+3478 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "CARRIE MUSKAT",
            "title": "Kyler Murray chooses NFL over baseball and A's",
            "description": "MESA, Ariz. (AP) — When Kyler Murray won the Heisman Trophy at Oklahoma last season, the Oakland Athletics knew there was a chance he might chose football over baseball.That is exactly what happened.On the day the A's started spring training workouts, Murray …",
            "url": "https://apnews.com/67666ba752e24da8baadd7a00a3e3fef",
            "urlToImage": "",
            "publishedAt": "2019-02-11T22:49:08Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "Amy Remeikis, Katharine Murphy",
            "title": "Medical evacuation bill still alive with Phelps open to amendments – politics live",
            "description": "Key crossbencher Kerryn Phelps indicates she would consider Labor’s changes to the medevac legislation. All the day’s events, live",
            "url": "https://www.theguardian.com/australia-news/live/2019/feb/12/morrison-shorten-coalition-labor-medical-evacuation-bill-kerryn-phelps-politics-live",
            "urlToImage": "https://i.guim.co.uk/img/media/9b9911678f7750d604735503dc7c08f1917c4eea/0_182_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=a949c9d8233bb3405e093e19f9b6b842",
            "publishedAt": "2019-02-11T22:47:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "CHRISTINE ARMARIO and SCOTT SMITH",
            "title": "Venezuela's crisis hits stand-still over emergency aid",
            "description": "CUCUTA, Colombia (AP) — Nearly three weeks after the Trump administration backed an all-out effort to overthrow Nicolas Maduro, there is little sign the Venezuelan president is losing his grip on power.Dozens of nations have recognized opposition leader Juan …",
            "url": "https://apnews.com/2edc68abdb7440d7a5b558641b98ece1",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/media:c5cfa824a26446cbad5d121c0ae97336/3000.jpeg",
            "publishedAt": "2019-02-11T22:46:28Z",
            "content": null
        },
        {
            "source": {
                "id": "the-guardian-uk",
                "name": "The Guardian (UK)"
            },
            "author": "Vivian Ho, Ben Jacobs",
            "title": "Democrats and Republicans in last-ditch attempt to avert shutdown – live",
            "description": "Disagreements on immigration policy have imperiled prospect of a deal as Ilhan Omar apologizes after being accused of ‘antisemitic’ tweets",
            "url": "https://www.theguardian.com/us-news/live/2019/feb/11/trump-news-latest-live-updates-government-shutdown-us-politics-today",
            "urlToImage": "https://i.guim.co.uk/img/media/9aea69fcfc196d0264283042ede2f302dd5f08fa/0_0_4312_2588/master/4312.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=bafd5c8d81774957c67a26430b70b016",
            "publishedAt": "2019-02-11T22:44:05Z",
            "content": "American Bridge 21st Century which primarily focuses on obtaining opposition research on Republicans argues in its complaint that Schultz is pushing the limits of an exemption in the Federal Election Campaign Act that allows potential candidates to test the w… [+401 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Wolverhampton Wanderers 1-1 Newcastle United: Willy Boly header denies Newcastle",
            "description": "Willy Boly scores a dramatic late equaliser for Wolves to deny Newcastle a precious victory in their battle against relegation from the Premier League.",
            "url": "http://www.bbc.co.uk/sport/football/47112137",
            "urlToImage": "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/11AC6/production/_105609327_hi052269770.jpg",
            "publishedAt": "2019-02-11T22:43:57Z",
            "content": "Boly jumped with Dubravka to bundle the ball home in the 95th minute\r\nWilly Boly scored a dramatic late equaliser for Wolves to deny Newcastle a precious victory in their battle against relegation from the Premier League.\r\nRafael Benitez's Newcastle had appea… [+2049 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Barak Ravid of Israel's Channel 13 news",
            "title": "Exclusive: The secret drone deal that created an Israel-UAE rift",
            "description": "When the deal failed, the rift took two years to heal",
            "url": "https://www.axios.com/secret-drone-deal-israel-uae-iran-netanyahu-mbz-48caa235-1ed8-45fe-b691-b9bd41223ebb.html",
            "urlToImage": "https://images.axios.com/luTZW71S_RGCUAFkba-8QityJ0U=/0x0:3000x1688/1920x1080/2019/02/11/1549924991535.jpg",
            "publishedAt": "2019-02-11T22:43:35.005Z",
            "content": "Why it matters: Israel and the UAE had formed a secret alliance in the fight against Iran's nuclear program and activity across the Middle East, which was damaged when the deal failed.\r\nThe backdrop: After Netanyahu assumed office in 2009, he was briefed by M… [+2138 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "ALAN SUDERMAN and BEN FINLEY",
            "title": "Clamor for ouster of top Democrats slows in Virginia",
            "description": "RICHMOND, Va. (AP) — The clamor for the resignation of Virginia's top two politicians seemed to die down Monday, with some black community leaders forgiving Gov. Ralph Northam over the blackface furor and calling for a fair hearing for Lt. Gov. Justin Fairfax…",
            "url": "https://apnews.com/4a035c79a7124d22829c6c687cf99979",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/media:1d57d51f6323407b8d68a1939189c7de/3000.jpeg",
            "publishedAt": "2019-02-11T22:42:23Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Stephen Eisenhammer",
            "title": "Exclusive: Brazil miner Vale knew deadly dam had heightened risk of collapse",
            "description": "Vale SA, the world's largest iron ore miner, knew last year that the dam in Brazil that collapsed in January and killed at least 165 people had a heightened risk of rupturing, according to an internal document seen by Reuters on Monday.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/qsUtMs8IBzI/exclusive-brazil-miner-vale-knew-deadly-dam-had-heightened-risk-of-collapse-idUSKCN1Q0287",
            "urlToImage": "https://s3.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355537660&w=1200&r=LYNXNPEF1A1KM",
            "publishedAt": "2019-02-11T22:41:19Z",
            "content": "BELO HORIZONTE, Brazil (Reuters) - Vale SA, the world’s largest iron ore miner, knew last year that the dam in Brazil that collapsed in January and killed at least 165 people had a heightened risk of rupturing, according to an internal document seen by Reuter… [+4007 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "Matt Stopera",
            "title": "Faith Hill And Tim McGraw's Marriage Is The Best Reminder That True Love Exists",
            "description": "The best famous couple, TBH.",
            "url": "https://www.buzzfeed.com/mjs538/tim-mcgraw-faith-hill",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2019-02/11/17/enhanced/buzzfeed-prod-web-06/original-15800-1549924412-2.jpg?crop=1244:651;0,89",
            "publishedAt": "2019-02-11T22:40:54Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Tapper: Trump is lying to you to get border wall - CNN Video",
            "description": "CNN's Jake Tapper debunks President Trump's claim that violent crime decreased in El Paso, Texas, because of barriers built at the US-Mexico border.",
            "url": "http://us.cnn.com/videos/politics/2019/02/11/jake-tapper-trump-lying-to-you-border-wall-el-paso-sot-lead-vpx.cnn",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190211162252-jake-tapper-lead-02112019-2-super-tease.jpg",
            "publishedAt": "2019-02-11T22:38:36.6173932Z",
            "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Lesko: Democrats care more about illegal immigrants than our own citizens",
            "description": "Border negotiations stall over number of ICE detention beds for immigrants; Arizona Rep. Debbie Lesko weighs in.",
            "url": "https://video.foxnews.com/v/6000969927001/",
            "urlToImage": "https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/02/11/640/360/694940094001_6000965598001_6000969927001-vs.jpg",
            "publishedAt": "2019-02-11T22:38:13.1220392Z",
            "content": null
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": null,
            "title": "Colgate replaces Ian Cook as chief executive",
            "description": "Chief operating officer Noel Wallace promoted to run toothpaste maker",
            "url": "https://www.ft.com/content/2ed540e2-2e47-11e9-8744-e7016697f225",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F0ecf82e6-2e4a-11e9-80d2-7b637a9e1ba1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2019-02-11T22:38:12.6220413Z",
            "content": "Colgate-Palmolive announced on Monday that Noel Wallace will replace Ian Cook as chief executive in April.\r\nMr Cook, who has led Colgate-Palmolive since 2007, will remain with the company as executive chairman for up to 12 months to assist with the transition… [+617 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Four staffers working for Virginia Lt. Gov. resign amid sexual assault allegations",
            "description": "Four staffers working for embattled Virginia Lt. Gov. Justin Fairfax resigned Monday, leaving him with a skeleton crew as calls for him to step down amid two sexual assault allegations grow",
            "url": "https://www.foxnews.com/politics/four-staffers-working-for-virginia-lt-gov-resign-amid-sexual-assault-allegations",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/02/20b52f3a-AP19037795832581.jpg",
            "publishedAt": "2019-02-11T22:38:11.2939193Z",
            "content": "Four staffers working for embattled Virginia Lt. Gov. Justin Fairfax resigned Monday, leaving him with a skeleton crew as calls grow for him to step down amid two sexual assault allegations.\r\nFairfax’s policy director, Adele McClure, and scheduler, Julia Bill… [+2198 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Conservative Party reverses course on Trost, now says MP didn't leak list to firearms group | CBC News",
            "description": "A year and a half after it accused one of its MPs of leaking a list of Conservative Party members to a firearms rights group, the party has changed course and now says Brad Trost had nothing to do with the leak.",
            "url": "http://www.cbc.ca/news/politics/trost-tory-party-come-to-agreement-1.5014977",
            "urlToImage": "https://i.cbc.ca/1.3884597.1481070004!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/brad-trost.jpg",
            "publishedAt": "2019-02-11T22:37:49.4502273Z",
            "content": "A year and a half after it accused one of its MPs of leaking a list of Conservative Party members to a firearms rights group, the party has changed course and now says Brad Trost had nothing to do with the leak.\r\n'In short, [the Leadership Election Organizing… [+3097 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "Lauren Yapalater",
            "title": "As A Lesbian, I'd Like To Thank Dua Lipa And St. Vincent For Their Grammys Performance",
            "description": "THANK YOU!!",
            "url": "https://www.buzzfeed.com/lyapalater/on-behalf-of-all-lesbians-id-like-to-thank-dua-l",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2019-02/11/17/campaign_images/buzzfeed-prod-web-05/as-a-lesbian-id-like-to-thank-dua-lipa-and-st-vin-2-7218-1549924661-0_dblbig.jpg",
            "publishedAt": "2019-02-11T22:37:48Z",
            "content": "BuzzFeed HomeSitemap© 2019 BuzzFeed, Inc."
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Sy Mukherjee",
            "title": "Brainstorm Health: Supplements Crackdown, Praluent Price Slash, Ebola Outbreak",
            "description": "Brainstorm Health Daily: February 11, 2019",
            "url": "http://fortune.com/2019/02/11/brainstorm-health-daily-02-11-19/",
            "urlToImage": "http://fortune.com/img/misc/og-default.png",
            "publishedAt": "2019-02-11T22:37:15Z",
            "content": "Happy Monday, readers. I hope you enjoyed your weekend.\r\nThe Food and Drug Administration (FDA) is preparing to battle what has, for decades, been one of the less-regulated mass consumer industries in America: Dietary supplements.\r\nFDA Commissioner Scott Gott… [+1588 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Ina Fried",
            "title": "Amazon buys Wi-Fi router maker Eero amid broader smart home push",
            "description": "Fast Wi-Fi is increasingly central to many of Amazon's smart home ambitions.",
            "url": "https://www.axios.com/amazon-buys-eero-97f025bb-0ad4-44ab-aab0-4f00db18fa86.html",
            "urlToImage": "https://images.axios.com/AWIACpuN2Ggu5njPYL0arLq5ySg=/0x0:1920x1080/1920x1080/2019/02/11/1549924183506.jpg",
            "publishedAt": "2019-02-11T22:35:49.622Z",
            "content": "Amazon said Monday it is buying Eero, a San Francisco startup known for its mesh router kit designed to deliver Wi-Fi evenly throughout the home. Financial terms were not disclosed.\r\nWhy it matters: Amazon has been expanding its smart-home offerings, and Wi-F… [+141 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Qasim Rashid",
            "title": "Roger Northam, blackface and the myth of color blindness in America",
            "description": "Roger Northam, blackface and the myth of color blindness in America",
            "url": "https://www.nbcnews.com/think/opinion/roger-northam-blackface-myth-color-blindness-america-ncna970241",
            "urlToImage": "https://media3.s-nbcnews.com/j/newscms/2019_05/2736471/190131-seeing-color-kh_2c999df1daa5886856daeba4a1b9ae4c.nbcnews-fp-1200-630.jpg",
            "publishedAt": "2019-02-11T22:33:00Z",
            "content": "Get the Think newsletter.\r\nSUBSCRIBE\r\nFeb. 11, 2019, 10:33 PM GMT\r\nFebruary is Black History Month in America. Maybe it is only fitting, then, that the past (few) weeks have focused so much attention on casual white racism. Were not talking about the open rac… [+5508 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Apple iPhone sales in China fell by a fifth in fourth quarter: IDC",
            "description": "Apple Inc iPhone sales in China fell 20 percent year-on-year in the fourth quarter of 2018, while sales for smartphones made by home-grown rival Huawei soared by 23 percent, data from industry research firm IDC showed on Monday.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/TVLnHIPYtO0/apple-iphone-sales-in-china-fell-by-a-fifth-in-fourth-quarter-idc-idUSKCN1Q01QO",
            "urlToImage": "https://s3.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355477582&w=1200&r=LYNXNPEF1A18K",
            "publishedAt": "2019-02-11T22:32:03Z",
            "content": "(Reuters) - Apple Inc iPhone sales in China fell 20 percent year-on-year in the fourth quarter of 2018, while sales for smartphones made by home-grown rival Huawei soared by 23 percent, data from industry research firm IDC showed on Monday. \r\nThe report is th… [+1685 chars]"
        },
        {
            "source": {
                "id": "metro",
                "name": "Metro"
            },
            "author": "Basit Mahmood",
            "title": "Teenager accused of raping and murdering girl blames woman for crime",
            "description": "A 16-year-old boy, who cannot be named for legal reasons, denies taking Alesha her from her bed, assaulting and murdering her.",
            "url": "https://metro.co.uk/2019/02/11/teenager-accused-raping-murdering-girl-6-blames-woman-crime-8535888/",
            "urlToImage": "https://metrouk2.files.wordpress.com/2019/02/sec_51817481-6419_1549924339.jpg?quality=90&strip=all&w=1200&h=630&crop=1&resize=1200%2C630&zoom=1",
            "publishedAt": "2019-02-11T22:32:01Z",
            "content": "A teenage boy accused of abducting a six-year-old girl before raping and murdering her on the Isle of Bute is blaming a woman for the crime.\r\nAlesha MacPhails body was discovered in woodland on the Island in the Firth of Clyde on July 2 last year.\r\nA 16-year-… [+1656 chars]"
        },
        {
            "source": {
                "id": "the-jerusalem-post",
                "name": "The Jerusalem Post"
            },
            "author": null,
            "title": "Congresswoman Ilhan Omar apologizes for using 'antisemitic tropes'",
            "description": "The exceptional rebuke comes after Omar, a freshman member of Congress, suggested on Twitter that her colleagues have been paid off to support Israel.",
            "url": "https://www.jpost.com/American-Politics/Congresswoman-Ilhan-Omar-apologizes-for-using-antisemitic-tropes-580376",
            "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/433897",
            "publishedAt": "2019-02-11T22:32:00Z",
            "content": "X\r\n Dear Reader,\r\n As you can imagine, more people are reading The Jerusalem Post than ever before.\r\n Nevertheless, traditional business models are no longer sustainable and high-quality publications,\r\n like ours, are being forced to look for new ways to keep… [+3869 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Kyle Orland",
            "title": "Valve has some new thoughts on what’s “humanly possible” in SteamVR",
            "description": "Expert Beat Saber players are rotating their wrists at over 3,600 degrees/second.",
            "url": "https://arstechnica.com/gaming/2019/02/valve-has-some-new-thoughts-on-whats-humanly-possible-in-steamvr/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2019/02/beat-saber-2-760x380.jpg",
            "publishedAt": "2019-02-11T22:30:14+00:00",
            "content": "8 with 8 posters participating\r\nThe kind of Beat Saber levels that require hand movements that were once considered superhuman by SteamVR developers.\r\nOver the years, Valve has made dozens of changes to the system-level software behind SteamVR. Most of them a… [+2344 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Michal Baranowski",
            "title": "For Mideast summit, U.S. withdrawal from the Iran deal still a flashpoint",
            "description": "It's become one of the thorniest points of transatlantic division.",
            "url": "https://www.axios.com/for-mideast-summit-us-withdrawal-from-the-iran-deal-still-a-flashpoint--1c3bd2dc-0552-49cb-a0f8-39aa821c8bc0.html",
            "urlToImage": "https://images.axios.com/4n8spv7Uy48mS28foVGx_XCx0jc=/0x256:5154x3155/1920x1080/2019/02/11/1549921732945.jpg",
            "publishedAt": "2019-02-11T22:30:00Z",
            "content": "Background: President Trump's decision to withdraw from the JCPOA last year has created one of the thorniest points of transatlantic division. The EU continues to support the agreement, and many Western Europeans view the conference as an uncomfortable dilemm… [+1424 chars]"
        },
        {
            "source": {
                "id": "the-telegraph",
                "name": "The Telegraph"
            },
            "author": null,
            "title": "Jadon Sancho: 'I hope I can give a positive message to kids from south London'",
            "description": "It will be the second time Jadon Sancho steps out at Wembley on Wednesday night, having won his second England cap there in November, and for the 18-year-old who has changed the way English footballers think about their future, this is the only Wembley Stadiu…",
            "url": "http://www.telegraph.co.uk/football/2019/02/11/jadon-sancho-hope-can-give-positive-message-kids-south-london/",
            "urlToImage": "https://www.telegraph.co.uk/content/dam/football/2019/02/11/TELEMMGLPICT000187751668-xlarge_trans_NvBQzQNjv4BqdQ8YrSsR88w3pzEpBtW9VkYMapKPjdhyLnv9ax6_too.jpeg",
            "publishedAt": "2019-02-11T22:30:00Z",
            "content": "Wednesdays game is back in what Sancho calls his hometown and with Harry Kane and Dele Alli injured, one gets the impression that it may leave the stage clear for the another English star to shine. Harry Winks is the Spurs player Sancho knows best from his ti… [+2210 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Tasha Robinson",
            "title": "Pixar’s new YouTube short plays like a companion piece to Wall-E",
            "description": "The latest in Pixar’s SparkShorts series, described as an indie filmmaking program within the animation studio, features robots on the rampage, taking their freedom to explore the world. The short, Smash And Grab, is the second SparkShorts movie to hit YouTub…",
            "url": "https://www.theverge.com/2019/2/11/18220965/pixar-short-smash-and-grab-sparkshorts-two-old-robots-rebel-against-their-repetitive-job",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/7Xe9ddDCram3pbWy2YYuVT-f-SQ=/293x0:2570x1192/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13752759/Smash.png",
            "publishedAt": "2019-02-11T22:29:49Z",
            "content": "When Pixar Animation Studios first introduced the SparkShorts series in January, the studio explained that the short films came from a program of indie filmmaking inside of Pixar. Creators are given six months and a small budget to make their own unique proje… [+1126 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Michele Sinner",
            "title": "'Something has to give,' EU's Barnier tells Brexit Britain",
            "description": "European Union Brexit negotiator Michel Barnier said on Monday British Prime Minister Theresa May should endorse a permanent customs union with the bloc - as proposed by the opposition Labour party - to break the impasse over their looming divorce.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/QvJqpeG5AIw/something-has-to-give-eus-barnier-tells-brexit-britain-idUSKCN1Q01JJ",
            "urlToImage": "https://s3.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355454553&w=1200&r=LYNXNPEF1A147",
            "publishedAt": "2019-02-11T22:29:05Z",
            "content": "LUXEMBOURG/BRUSSELS (Reuters) - European Union Brexit negotiator Michel Barnier said on Monday British Prime Minister Theresa May should endorse a permanent customs union with the bloc - as proposed by the opposition Labour party - to break the impasse over t… [+2500 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "LAURIE KELLMAN",
            "title": "Rep. Omar apologizes for tweets on AIPAC's influence",
            "description": "WASHINGTON (AP) — Freshman Democratic Rep. Ilhan Omar \"unequivocally\" apologized Monday for tweets suggesting that members of Congress support Israel because they are being paid to do so, which drew bipartisan criticism and a rebuke from House Speaker Nancy P…",
            "url": "https://apnews.com/afb0d4240c934f7cb96e5c852be862fc",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/media:2ca0b3d314294afd99488d2b5f00e997/3000.jpeg",
            "publishedAt": "2019-02-11T22:28:09Z",
            "content": null
        },
        {
            "source": {
                "id": "mirror",
                "name": "Mirror"
            },
            "author": "Christopher Bucktin",
            "title": "Amazon boss Jeff Bezos' 'steamy texts with girlfriend exposed by her brother'",
            "description": "US reports claim Michael Sanchez allegedly supplied the couple’s steamy texts to tabloid magazine, the National Enquirer",
            "url": "https://www.mirror.co.uk/news/world-news/amazon-boss-jeff-bezos-steamy-13986215",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article13985380.ece/ALTERNATES/s1200/0_JS174878858.png",
            "publishedAt": "2019-02-11T22:27:54Z",
            "content": "The brother of Jeff Bezoss girlfriend exposed her affair with the Amazon boss , it has been hinted. \r\nLauren Sanchezs brother, Michael, allegedly supplied the couples steamy texts to tabloid magazine, the National Enquirer, according to US reports.\r\nUS TV sta… [+1946 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "William James",
            "title": "UK's May rejects pivot toward Brexit customs union compromise",
            "description": "British Prime Minister Theresa May has rejected the idea of targeting a customs union with the European Union, pouring cold water on hopes from some that she could shift her Brexit policy to win over the opposition Labour Party.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/l6DGlRUBa3Q/uks-may-rejects-pivot-toward-brexit-customs-union-compromise-idUSKCN1PZ0QB",
            "urlToImage": "https://s2.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355426095&w=1200&r=LYNXNPEF1A0XH",
            "publishedAt": "2019-02-11T22:26:35Z",
            "content": "LONDON (Reuters) - British Prime Minister Theresa May has rejected the idea of targeting a customs union with the European Union, pouring cold water on hopes from some that she could shift her Brexit policy to win over the opposition Labour Party. \r\nBritain i… [+2430 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Eric Song",
            "title": "The Best 4K TV Deals of 2019: 49-Inch 4K Smart TV for $230 - IGN",
            "description": "The Best 4K, Smart, HDR, and OLED HDTV Deals from Walmart, Amazon, Best Buy, Dell, and More.",
            "url": "https://www.ign.com/articles/2019/02/11/best-tv-deals-of-2018",
            "urlToImage": "https://assets1.ignimgs.com/2018/03/13/blogroll-tvs2-1520974350097_1280w.jpg",
            "publishedAt": "2019-02-11T22:26:03Z",
            "content": "The Best 4K, Smart, HDR, and OLED HDTV Deals from Walmart, Amazon, Best Buy, Dell, and More. \r\nWant more deals? Join the IGN Deals Newsletter.\r\nBy Eric SongIf you buy something through this post, IGN may get a share of the sale. For more, read our Terms of Us… [+8540 chars]"
        },
        {
            "source": {
                "id": "cnbc",
                "name": "CNBC"
            },
            "author": "Maggie Fitzgerald",
            "title": "Stocks making the biggest moves after hours: Gilead,  RingCentral, Chegg and more",
            "description": "See which stocks are posting big moves after the bell on February 11.",
            "url": "https://www.cnbc.com/2019/02/11/stocks-making-the-biggest-moves-after-hours-gilead--ringcentral-chegg-and-more.html",
            "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/08/25/101944425-IMG_2577.1910x1000.jpg",
            "publishedAt": "2019-02-11T22:25:02Z",
            "content": "Check out the companies making headlines after the bell:\r\ndiv &gt; div.group &gt; p:first-child\"&gt;\r\nShares of Gilead dropped as much as 5 percent after hours after the biotech company released disappointing test results from one of its chronic liver disease… [+1396 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Megan Rose Dickey",
            "title": "DoorDash is reportedly raising $500M at a $6B+ valuation",
            "description": "Just days after Postmates filed confidential paperwork for an initial public offering, the latest news in the on-demand delivery space is that competitor DoorDash is in the process of raising a $500 million round, the Wall Street Journal reports. The round wo…",
            "url": "https://techcrunch.com/2019/02/11/doordash-is-reportedly-raising-500m-at-a-6b-valuation/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/09/GettyImages-530551538.jpg?w=599",
            "publishedAt": "2019-02-11T22:24:05Z",
            "content": "Just days after Postmates filed confidential paperwork for an initial public offering, the latest news in the on-demand delivery space is that competitor DoorDash is in the process of raising a $500 million round, the Wall Street Journal reports. The round wo… [+799 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "r/dankmemes - Come on guys it has to be done",
            "description": "51,516 votes and 1,250 comments so far on Reddit",
            "url": "https://www.reddit.com/r/dankmemes/comments/apiov0/come_on_guys_it_has_to_be_done/",
            "urlToImage": "https://preview.redd.it/a3422rsq6zf21.jpg?auto=webp&s=d480f681ada4d727c10d3e156b9ab1f4d2f73e78",
            "publishedAt": "2019-02-11T22:23:54.8329042Z",
            "content": "If this is a dank meme, Upvote this comment!\r\nIf this is not a dank meme, Downvote this comment!\r\nIf this post breaks the rules, report it and Downvote this comment!\r\nThankyouforhelpingusinkeeping/r/dankmemesdank.Hitus ^upifyouhaveanyquestions. I'm a ^bot"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "r/BikiniBottomTwitter - Not the vase!!!!",
            "description": "23,162 votes and 124 comments so far on Reddit",
            "url": "https://www.reddit.com/r/BikiniBottomTwitter/comments/apitii/not_the_vase/",
            "urlToImage": "https://preview.redd.it/3gayqtls8zf21.jpg?auto=webp&s=4c43d86cf2cc004deaae5b0589b53c2efdb2fafa",
            "publishedAt": "2019-02-11T22:23:53.2235317Z",
            "content": "When I was younger I had friends over and we were messing about doing cartwheels and whatnot (inside, of course) when I kneed a giant hole into the wall.\r\nLike you, I knew you cant really fix anything that bad. But theres really only so much you can do to hid… [+667 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "Adrian Wojnarowski on Twitter",
            "description": "“Jeremy Lin is finalizing a buyout with Atlanta, clearing the way for him to sign with Toronto, agents Jim Tanner and Roger Montgomery tell ESPN.”",
            "url": "https://twitter.com/wojespn/status/1095028881273380864",
            "urlToImage": "https://pbs.twimg.com/profile_images/1001458947386171392/hT0wI2fs_400x400.jpg",
            "publishedAt": "2019-02-11T22:23:51.7079118Z",
            "content": "Welcome home!\r\nThis timeline is where youll spend most of your time, getting instant updates about what matters to you.\r\nTweets not working for you?\r\nHover over the profile pic and click the Following button to unfollow any account.\r\nSay a lot with a little\r\n… [+713 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "r/PrequelMemes - It’s perfectly legal",
            "description": "25,330 votes and 282 comments so far on Reddit",
            "url": "https://www.reddit.com/r/PrequelMemes/comments/apj8bn/its_perfectly_legal/",
            "urlToImage": "https://preview.redd.it/lyp8ttn8fzf21.jpg?auto=webp&s=16264697bf27d6798d94e17f80b6aebf4cc47e83",
            "publishedAt": "2019-02-11T22:23:50.6610399Z",
            "content": "Obi-Wan is not brave enough for politics, nor are we. Politics is a sweeping term that includes international politics, non-political posts about politicians, or anything else that is at all related to real life politics, regardless of if it is US or Internat… [+59 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "r/mildlyinteresting - You can’t read the cash machine screen if you’re not directly in front of it",
            "description": "20,622 votes and 407 comments so far on Reddit",
            "url": "https://www.reddit.com/r/mildlyinteresting/comments/apjho2/you_cant_read_the_cash_machine_screen_if_youre/",
            "urlToImage": "https://preview.redd.it/y2vdco9fjzf21.jpg?auto=webp&s=98b81ea4b0a98bda427c0757a26554803fd18ebd",
            "publishedAt": "2019-02-11T22:23:43.1922817Z",
            "content": "I've lived in a lot of different places in France. Forget about the lost shitholes, no one will speak English, and generally people will bitch about tourists.\r\nBuy public transportation passes. If you're from the US you'll be shocked to notice that having a c… [+1703 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "r/pics - Pulled over on the highway to get this photo. I’m glad I stopped.",
            "description": "69,865 votes and 1,057 comments so far on Reddit",
            "url": "https://www.reddit.com/r/pics/comments/apj4nj/pulled_over_on_the_highway_to_get_this_photo_im/",
            "urlToImage": "https://preview.redd.it/qea1t0rldzf21.jpg?auto=webp&s=b48df8e445c6f424f8539f34bfee7ea7782ff3cb",
            "publishedAt": "2019-02-11T22:23:41.5829403Z",
            "content": "Sure. I think I was using my old Nikon D7200 with a Nikkor 180mm f2.8 for this shot. I couldnt tell you the settings without looking at the metadata, but it was a pretty low aperture and quick shutter, as it was overcast, but still relatively bright.\r\nEdit: 1… [+106 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "r/OldSchoolCool - I see your 90s toothpaste costume and raise my waterfall costume (made by mom)",
            "description": "18,947 votes and 499 comments so far on Reddit",
            "url": "https://www.reddit.com/r/OldSchoolCool/comments/apjtil/i_see_your_90s_toothpaste_costume_and_raise_my/",
            "urlToImage": "https://preview.redd.it/bg8oktipozf21.jpg?auto=webp&s=90bb4f5979d98e17f01ad7eee6e6def4df816cab",
            "publishedAt": "2019-02-11T22:23:39.2391694Z",
            "content": "/r/OldSchoolCool\r\n**History's cool kids, looking fantastic!**\r\nA pictorial and video celebration of history's coolest kids, everything from beatniks to bikers, mods to rude boys, hippies to ravers. And everything in between. \r\nIf you've found a photo, or a ph… [+82 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "Massdrop x Sennheiser PC37X Gaming Headset | Price & Reviews | Massdrop",
            "description": "Massdrop exclusive product, price and reviews: Massdrop x Sennheiser PC37X Gaming Headset | 22.2K+ Sold | Based on Sennheiser’s top-tier gaming headsets, the...",
            "url": "https://alb.reddit.com/c?q=CgADCAZV7JzYGxAKAAUgsCThMwFjpQoABiCwJOEzAGOlCAAHAAAAAgoADAgGVe1adZQIAA==&amp;s=I9dD0LNf9PvDUnlm0-QHZTyN4N1g_9iF4IlnFy4a5cA=&amp;r=aHR0cHM6Ly93d3cubWFzc2Ryb3AuY29tL2J1eS9tYXNzZHJvcC14LXNlbm5oZWlzZXItcGMzN3gtZ2FtaW5nLWhlYWRzZXQ_bW9kZT1zaG9wX29wZW4mdXRtX3NvdXJjZT1yZWRkaXQmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPXBjMzd4ZmViJnV0bV90ZXJtPTIwMTkwMjA2JmZlPWRlbGF5X2Z0dWUsY2Fyb3VzZWwsbm9fYWw=",
            "urlToImage": "https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-pc37x-gaming-headset/FP/XRtczGRSY6iogWlwjgBy_MD-36678_20170313143205_102f7812ad0a0b91_20170530143221_20180719135912.png?bg=f0f0f0&w=600&h=600",
            "publishedAt": "2019-02-11T22:23:30.2860912Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "Who is Kacey Musgraves? Grammy album winner hits country and mainstream listeners",
            "description": "“Golden Hour” launched Musgraves into her own orbit with its sophisticated take on country-pop.",
            "url": "https://www.usatoday.com/story/life/music/2019/02/11/kacey-musgraves-2019-grammys-album-year-winner-golden-hour-country-music/2840154002/?utm_source=google&utm_medium=amp&utm_campaign=speakable",
            "urlToImage": "https://www.gannett-cdn.com/presto/2019/02/11/USAT/14748627-392d-4107-8193-43f84102aef3-XXX_GRAMMYS2019_RH_341.JPG?crop=4070,2289,x566,y46&width=3200&height=1680&fit=bounds",
            "publishedAt": "2019-02-11T22:23:27+00:00",
            "content": "From surprise appearances to bizarre performances, here are 5 can't-miss moments from the Grammy Awards.\r\n USA TODAY\r\nWith her win for album of the year at the 2019 Grammys, acclaimed country singer Kacey Musgraves was introduced to a whole new audience at Su… [+5437 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Police in Ontario free 43 Mexicans brought to Canada by alleged human traffickers | CBC News",
            "description": "Ontario Provincial Police say they have freed 43 modern-day slaves brought to Canada from Mexico by alleged human traffickers and forced to work as cleaners at hotels.",
            "url": "http://www.cbc.ca/news/canada/toronto/human-trafficking-bust-barrie-1.5014269",
            "urlToImage": "https://i.cbc.ca/1.5014615.1549913467!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/opp-human-trafficking-accommodations.JPG",
            "publishedAt": "2019-02-11T22:23:01.9693173Z",
            "content": "Ontario Provincial Police say they have freed 43 modern-day slaves brought to Canada from Mexico by alleged human traffickers and forced to work as cleaners at hotels.\r\nThe 43, mostly men aged 20 to 46, were coached on what to say when they entered Canada, li… [+3563 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "",
            "description": null,
            "url": "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.foxsports.com%2Fnascar%2Fvideo%2F1440358979995%3Futm_campaign%3Dshare_buttons%26utm_medium%3Dfscom%26utm_content%3Dreturn_visit%26utm_term%3Dsf%26utm_source%3Dshare_fb",
            "urlToImage": null,
            "publishedAt": "2019-02-11T22:22:19.9037386Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Former Trump lawyer Cohen Senate testimony postponed due to surgery",
            "description": "Testimony by U.S. President Donald Trump's former lawyer Michael Cohen planned for Tuesday before the Senate Intelligence Committee has been postponed due to a recent medical procedure, an attorney for Cohen said.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/Se3uLOoxjBU/former-trump-lawyer-cohen-senate-testimony-postponed-due-to-surgery-idUSKCN1Q02F8",
            "urlToImage": "https://s2.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355561231&w=1200&r=LYNXNPEF1A1Q4",
            "publishedAt": "2019-02-11T22:20:50Z",
            "content": "(Reuters) - Testimony by U.S. President Donald Trump’s former lawyer Michael Cohen planned for Tuesday before the Senate Intelligence Committee has been postponed due to a recent medical procedure, an attorney for Cohen said. \r\n“The Senate Select Committee on… [+1314 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Brian Raftery",
            "title": "Katy Perry Shoes Pulled From Online Stores After Blackface Controversy",
            "description": "Social media roars after blackface controversy, prompting Katy Perry to withdraw two designs from her footwear line from online retailers.",
            "url": "http://fortune.com/2019/02/11/katy-perry-shoes-blackface-controversy/",
            "urlToImage": "https://fortunedotcom.files.wordpress.com/2019/02/gettyimages-1128812427-e1549923460527.jpg",
            "publishedAt": "2019-02-11T22:18:31Z",
            "content": "Social media roared, and Katy Perry listened.\r\nThe 34-year-old singer and clothing designer has pulled two Perry-branded shoes from online stores, following complaints that their designs resembled blackface makeup.\r\nAccording to USA Today, the two designsthe … [+1271 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Sexual assault claims against Justin Fairfax draw parallels to Kavanaugh accusations",
            "description": "Two women have now accused Virginia Lt. Gov. Justin Fairfax of sexual assault, and many are calling for his resignation. Fairfax has denied the claims, saying they are an attempt to \"smear\" him as his political profile rises. The situation draws parallels to …",
            "url": "https://www.cbsnews.com/video/sexual-assault-claims-against-justin-fairfax-draw-parallels-to-kavanaugh-accusations/",
            "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2019/02/11/ce416ff3-4dca-43fd-9f56-cd3a77205e25/thumbnail/1200x630/31b9d60c9d41d05c9aa108b6bc0f6743/0211-cbsn-parallels-1780271-640x360.jpg",
            "publishedAt": "2019-02-11T22:18:25+00:00",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "DON BABWIN",
            "title": "Prosecutors seek new sentence in Laquan McDonald case",
            "description": "CHICAGO (AP) — Prosecutors on Monday asked Illinois' highest court to review the less than seven year prison sentence for the white Chicago police officer who fatally shot black teenager Laquan McDonald — an unusual move in what was already a rare case.Illino…",
            "url": "https://apnews.com/e697c3271ff24c5fb37ba70c32dce914",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/media:a40dfbc8b21e411c9591584225e1ab46/3000.jpeg",
            "publishedAt": "2019-02-11T22:17:52Z",
            "content": null
        },
        {
            "source": {
                "id": "the-lad-bible",
                "name": "The Lad Bible"
            },
            "author": "Stewart Perrie",
            "title": "Huge Fire Breaks Out At Hospital In Tamworth",
            "description": "More than 10 fire engines are at the scene battling the blaze.",
            "url": "http://www.theladbible.com/news/news-huge-fire-breaks-out-at-mental-health-hospital-in-tamworth-20190211",
            "urlToImage": "http://beta.ems.ladbiblegroup.com/s3/content/808x455/3f7849305c61cceabf457e0cf9e6d158.png",
            "publishedAt": "2019-02-11T22:17:50",
            "content": "More than 10 fire trucks have been sent to battle a large blaze at a hospital in Tamworth, UK. \r\nAccording to the Mirror, the George Bryan Centre at the Sir Robert Peel Hospital erupted in flames within the last few hours, with pictures showing the fire conta… [+113 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "Delaware woman wins $1.5 million breastfeeding discrimination case against KFC franchisee",
            "description": "A jury has ruled in favor of a Delaware woman suing a her former employer, a KFC franchisee, on claims of gender discrimination and harassment.",
            "url": "https://www.delawareonline.com/story/news/local/2019/02/11/delaware-woman-wins-1-5-million-breastfeeding-discrimination-case/2816075002?utm_source=google&utm_medium=amp&utm_campaign=speakable",
            "urlToImage": "https://www.gannett-cdn.com/presto/2019/01/08/PWIL/2e561369-b43e-413b-8676-d6468f67c3b0-DSC_1047.JPG?crop=5999,3359,x0,y0&width=3200&height=1680&fit=bounds",
            "publishedAt": "2019-02-11T22:17:25+00:00",
            "content": "Kentucky Fried Chicken on DuPont Highway in Dover.\r\n (Photo: Maddy Lauria)\r\nWILMINGTON, Del. A jury has ruled that a Kentucky Fried Chicken franchisee must pay a Delaware woman it once employed more than $1.5 million in damages related to workplace discrimina… [+3615 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "George Clooney on his 'Catch-22' TV series, and the 'life-changing' experience of 'ER'",
            "description": "The A-list actor directs and stars in Hulu's six-episode adaptation of 'Catch-22,' due in May",
            "url": "https://www.usatoday.com/story/life/tv/2019/02/11/george-clooney-dishes-his-new-role-hulus-catch-22/2837937002/?utm_source=google&utm_medium=amp&utm_campaign=speakable",
            "urlToImage": "https://www.gannett-cdn.com/presto/2019/02/11/USAT/c437a85b-fce8-4436-9193-74d3db93d2a3-C22_102-_PS8852-00607RT3.jpg?crop=5772,3232,x0,y499&width=3200&height=1680&fit=bounds",
            "publishedAt": "2019-02-11T22:15:37+00:00",
            "content": "George Clooney as Scheisskopf, Christopher Abbott as Yossarian and Pico Alexander as Clevinger in Hulu's new adaptation of \"Catch-22.\"\r\n (Photo: Philipe Antonello, Philipe Antonello / Hulu)\r\nPASADENA, Calif.  Twenty-five years after he began his breakout role… [+3170 chars]"
        },
        {
            "source": {
                "id": "australian-financial-review",
                "name": "Australian Financial Review"
            },
            "author": "Vesna Poljak",
            "title": "Macquarie Group maintains financial year 2019 guidance",
            "description": "Macquarie Group maintained its profit guidance in a trading update on Tuesday, highlighting the improved performance of its markets-facing businesses and the conclusion of asset sales.",
            "url": "https://www.afr.com/markets/macquarie-group-maintains-financial-year-2019-guidance-20190211-h1b53e",
            "urlToImage": "https://static.ffx.io/images/$zoom_1%2C$multiply_0.6825938566552902%2C$ratio_1.777778%2C$width_1172%2C$x_660%2C$y_116/t_crop_custom/t_sharpen%2Cq_auto%2Cf_auto/260b74c976c678d34f53b1a15fd1d1539fe983f8",
            "publishedAt": "2019-02-11T22:15:33Z",
            "content": "Macquarie Group maintained its profit guidance in a trading update on Tuesday, highlighting the improved performance of its markets-facing businesses and the conclusion of asset sales.\r\n\"Macquarie currently expects an increase of up to 15 per cent in the FY19… [+943 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lily Hay Newman",
            "title": "Amber Authenticate Protects Video Footage From Deepfakes and Tampering",
            "description": "Many of the body cameras worn by police are woefully vulnerable to hacking and manipulation. Amber Authenticate wants to fix that—with the blockchain.",
            "url": "https://www.wired.com/story/amber-authenticate-video-validation-blockchain-tampering-deepfakes/",
            "urlToImage": "https://media.wired.com/photos/5c5ddb05ce8fab32cc676d9e/191:100/pass/Body-Cam-1033436912.jpg",
            "publishedAt": "2019-02-11T22:15:21Z",
            "content": "Video has become an increasingly crucial to law enforcement tool, whether it comes from security cameras, police-worn body cameras, a bystander's smartphone, or another source. But a combination of \"deepfake\" video manipulation technology and security issues … [+4639 chars]"
        },
        {
            "source": {
                "id": "australian-financial-review",
                "name": "Australian Financial Review"
            },
            "author": "Jenny Wiggins",
            "title": "Transurban interim profits fall 56pc on WestConnex acquisition costs",
            "description": "Stamp duty and integration costs linked to Transurban's $9.3bn purchase of Sydney tollroad WestConnex weighed down interim profits.",
            "url": "https://www.afr.com/business/transurban-interim-profits-fall-56pc-on-westconnex-acquisition-costs-20190211-h1b4eg",
            "urlToImage": "https://static.ffx.io/images/$zoom_1%2C$multiply_1.0638297872340425%2C$ratio_1.777778%2C$width_752%2C$x_768%2C$y_292/t_crop_custom/t_sharpen%2Cq_auto%2Cf_auto/1c1e876a246d6882dd67675a46ab273a0e20354c",
            "publishedAt": "2019-02-11T22:15:17Z",
            "content": "Transurban said tunnelling had been completed on its troubled NorthConnex motorway project as the tollroad operator reported a 56 per cent fall in interim net profit to $145 million.\r\nNet profits were hurt by some $291 million of stamp duty and integration co… [+1290 chars]"
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "\n                            James Hibberd\n                          ",
            "title": "TV pilots guide: Every new show in the works",
            "description": "A guide to all the pilots from ABC, CBS, The CW, NBC, and Fox in contention for a spot on the 2019-2020 schedule.",
            "url": "https://ew.com/tv/2019/02/11/fall-tv-pilots-2019/",
            "urlToImage": "https://ewedit.files.wordpress.com/2019/02/pilot.jpg?crop=0px%2C0px%2C2700px%2C1417.5px&resize=1200%2C630",
            "publishedAt": "2019-02-11T22:14:46Z",
            "content": "What if Frankenstein solved crimes? What if the Bermuda Triangle was a mysterious land you could get lost in? What if there was an NYPD Blue sequel and if The Lost Boys was a TV show? Broadcasters are full of ideas for next season and have ordered dozens of p… [+21730 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Joe Coleman",
            "title": "Wolverhampton Wanderers 1-1 Newcastle United: Late drama at Molineux as Willy Boly heads home in stoppage",
            "description": "The centre-half headed home in the 95th minute, despite four minutes of stoppage time being added",
            "url": "https://talksport.com/football/492677/wolverhampton-wanderers-newcastle-united-molineux-willy-boly-rafa-benitez/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2019/02/TALKSPORT-WOLVES-V-NEWC-match-report1.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            "publishedAt": "2019-02-11T22:14:09Z",
            "content": "Wolverhampton Wanderers secured a vital late point against Newcastle United as Willy Boly popped up to head home in the last-minute of stoppage time.\r\nThe centre half stayed forward as Wolves pushed for an equaliser, heading home after an erratic cross from A… [+2565 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "Potent storm slams Hawaii with 191-mph winds, 60-foot waves and rare snow on Maui",
            "description": "A powerful storm hit Hawaii over the weekend, bringing dangerous surf conditions, several inches of snow, and a 191-mph wind gust.",
            "url": "https://www.usatoday.com/story/news/2019/02/10/hawaii-storm-brings-60-foot-waves-power-outages/2832866002/?utm_source=google&utm_medium=amp&utm_campaign=speakable",
            "urlToImage": "https://www.gannett-cdn.com/presto/2019/02/11/USAT/ab36ab1e-f4f8-4e86-be02-857e8355bb26-AP_Tropical_Weather-Hawaii.JPG?crop=4897,2741,x0,y0&width=3200&height=1680&fit=bounds",
            "publishedAt": "2019-02-11T22:13:43+00:00",
            "content": "A strong storm hitting Hawaii has knocked out power, brought down tree branches, flooded coastal roads and even brought snow. (Feb. 11)\r\n AP\r\nA deadly winter storm battered Hawaii over the weekend, bringing dangerous surf conditions, heavy snow and damaging w… [+3352 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Amazon is buying home mesh router startup, Eero",
            "description": "Amazon is about to expand its smart home offerings in a big way. The company just announced its intention to acquire Bay Area-based home mesh router startup, Eero. It’s a pretty clear fit for the online retailer as it pushes to make Alexa feature in the conne…",
            "url": "https://techcrunch.com/2019/02/11/amazon-is-buying-home-mesh-router-startup-eero/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/06/eero_and_beacon.jpg?w=600",
            "publishedAt": "2019-02-11T22:11:15Z",
            "content": "Amazon is about to expand its smart home offerings in a big way. The company just announced its intention to acquire Bay Area-based home mesh router startup, Eero. Its a pretty clear fit for the online retailer as it pushes to make Alexa feature in the connec… [+1414 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Greg Kumparak",
            "title": "Hands-on with an Alpha build of Google Maps' Augmented Reality mode",
            "description": "I think most of us have had this experience, especially when you’re in a big city: you step off of public transit, take a peek at Google Maps to figure out which way you’re supposed to go… and then somehow proceed to walk two blocks in the wrong direction. Ma…",
            "url": "https://techcrunch.com/2019/02/11/hands-on-with-an-alpha-build-of-google-maps-augmented-reality-mode/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/02/Google-Maps-AR-mode.png?w=527",
            "publishedAt": "2019-02-11T22:10:20Z",
            "content": "I think most of us have had this experience, especially when you’re in a big city: you step off of public transit, take a peek at Google Maps to figure out which way you’re supposed to go… and then somehow proceed to walk two blocks in the wrong direction.\r\nM… [+4637 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "",
            "description": null,
            "url": "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.foxsports.com%2Fwatch%2Fundisputed%2Fvideo%2F1440627267879%3Futm_campaign%3Dshare_buttons%26utm_medium%3Dfscom%26utm_content%3Dreturn_visit%26utm_term%3Dsf%26utm_source%3Dshare_fb",
            "urlToImage": null,
            "publishedAt": "2019-02-11T22:08:08.6396093Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "Undisputed",
            "description": "Watch Undisputed where Skip Bayless and Shannon Sharpe give their unfiltered, incisive, passionate opinions on the biggest sports topics of the day.",
            "url": "https://www.foxsports.com/watch/undisputed/video",
            "urlToImage": "https://b.fssta.com/uploads/2016/12/default_image.vresize.1200.630.high.0.png",
            "publishedAt": "2019-02-11T22:07:58.7479097Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Acting AG Whitaker and HSS Secretary Nielsen speak at National Sheriffs' Association Winter Conference",
            "description": "",
            "url": "https://video.foxnews.com/v/6000971677001/",
            "urlToImage": "https://media2.foxnews.com/thumbnails/i/LIVE_DEFAULTS/FNC_DEFAULT_1280.png",
            "publishedAt": "2019-02-11T22:07:57.4354404Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Gary Robertson",
            "title": "Virginia Democrats hold fire on impeachment of lieutenant governor",
            "description": "Virginia Democrats pressured Lieutenant Governor Justin Fairfax to resign on Monday over accusations of sexual assault, which he denies, but held off on pursuing impeachment, with the Republican speaker of the state House urging restraint.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/qBoYqYKJNKA/virginia-democrats-hold-fire-on-impeachment-of-lieutenant-governor-idUSKCN1Q00PS",
            "urlToImage": "https://s3.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355558080&w=1200&r=LYNXNPEF1A1PM",
            "publishedAt": "2019-02-11T22:07:56Z",
            "content": "RICHMOND, Va. (Reuters) - Virginia Democrats pressured Lieutenant Governor Justin Fairfax to resign on Monday over accusations of sexual assault, which he denies, but held off on pursuing impeachment, with the Republican speaker of the state House urging rest… [+4332 chars]"
        },
        {
            "source": {
                "id": "mirror",
                "name": "Mirror"
            },
            "author": "Amber Hicks",
            "title": "Massive fire breaks out at Tamworth hospital",
            "description": "Emergency crews have descended on the hospital's George Bryan Centre",
            "url": "https://www.mirror.co.uk/news/uk-news/breaking-tamworth-hospital-fire-massive-13986205",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article13986206.ece/ALTERNATES/s1200/1_fire1235JPG.jpg",
            "publishedAt": "2019-02-11T22:07:18Z",
            "content": "A huge fire has broken out at a Staffordshire hospital.\r\nEmergency crews have descended on the George Bryan Centre at the Sir Robert Peel Hospital in Mile Oak, Tamworth.\r\nThe centre gives medical treatment to people with mental health issues.\r\nStaffordshire F… [+824 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Jeff Stein",
            "title": "America's next phony war: Will Iran be Trump's Iraq?",
            "description": "Veteran Middle East hands worry that the president’s blunders and Iranian overreactions could lead to a shooting conflict nobody wants.",
            "url": "http://www.newsweek.com/iran-trump-war-iraq-nuclear-weapons-1327007",
            "urlToImage": "https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/02/11/feiran01956521812use-banner.jpg",
            "publishedAt": "2019-02-11T22:04:05Z",
            "content": "The president was upset. Watching TV in his White House residence, his usual morning routine, Donald Trump saw his intelligence chiefs kick the legs out from under yet another of his pet campaigns: Iran. Trump and two of his top national security officials ha… [+23594 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "https://www.facebook.com/ShaolinTomReporter",
            "title": "John Bolton tells Iran's supreme leader, \"I don't think you'll have many more anniversaries left to enjoy\"",
            "description": "National security adviser John Bolton's message came shortly after Trump himself railed on Twitter against #40YearsofFailure since Iran's Islamic Revolution.",
            "url": "http://www.newsweek.com/bolton-iran-ayatollah-many-years-trump-anniversary-1327159",
            "urlToImage": "https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/02/11/boltoniran40thmessage_0.JPG",
            "publishedAt": "2019-02-11T22:03:13Z",
            "content": "President Donald Trump's national security adviser has issued a direct threat to Iran's supreme leader on the 40th anniversary of his country's Islamic Revolution.\r\nJohn Bolton was featured Monday in an ominous video posted to the White House's official Twitt… [+4433 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "ALANNA DURKIN RICHER",
            "title": "Woman begins jail sentence for texting suicide conviction",
            "description": "TAUNTON, Mass. (AP) — A Massachusetts woman who sent her suicidal boyfriend a barrage of text messages urging him to kill himself was jailed Monday on an involuntary manslaughter conviction nearly five years after he died in a truck filled with toxic gas.Mich…",
            "url": "https://apnews.com/320866bd419a49c8a82b55e39390f2c8",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/media:d770fe853e4241f4b831610c43594c5c/2000.jpeg",
            "publishedAt": "2019-02-11T22:01:27Z",
            "content": null
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "FourFourTwo",
            "title": "Wolves 1 Newcastle United 1: Boly snatches draw with seconds to spare",
            "description": "Rui Patricio's error from an Isaac Hayden strike looked set to give Newcastle United a win at Wolves until Willy Boly levelled at the death.",
            "url": "http://www.fourfourtwo.com/news/wolves-1-newcastle-united-1-boly-snatches-draw-seconds-spare",
            "urlToImage": "https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/willy-boly-cropped_iqd76k963dkx1jtnxzibx57hi.jpg",
            "publishedAt": "2019-02-11T22:01:01Z",
            "content": "Newcastle United were denied a valuable win at Wolves as Willy Boly forced a 1-1 draw in the final few seconds at Molineux.\r\nIsaac Hayden looked to have secured three important points for the visitors in their fight for Premier League survival, only for Boly'… [+236 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Shehab Khan",
            "title": "BBC must ‘think more carefully’ about how its news provision is impacting the industry, new report says",
            "description": "Cairncross Review calls on the corporation to 'share its technical and digital expertise'",
            "url": "http://www.independent.co.uk/news/media/bbc-impact-news-industry-media-review-report-cairncross-a8774671.html",
            "urlToImage": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/08/17/22/BBC-Getty.jpg",
            "publishedAt": "2019-02-11T22:01:00Z",
            "content": "The BBC needs to think more carefully about how its news provision is impacting the commercial news industry, a wide-ranging review looking into the future of journalism has said. \r\nThe Cairncross Review, has called on regulator Ofcom to explore the impact th… [+32479 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Dan Stapleton",
            "title": "Every IGN BioWare Game Review - IGN",
            "description": "It's been 23 years since a duo of Canadian physicians founded BioWare&amp;hellip;",
            "url": "https://www.ign.com/articles/2019/02/11/every-ign-bioware-game-review?abthid=5c61f7ab240107610b0003e3",
            "urlToImage": "https://assets1.ignimgs.com/2019/02/11/biothumb-1549920032921_1280w.jpg",
            "publishedAt": "2019-02-11T22:00:59Z",
            "content": null
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Makena Kelly",
            "title": "Zero-rating programs increase wireless data prices, according to new study",
            "description": "A lack of net neutrality rules can have real-world consequences on wireless data prices, according to a new study by Epicenter.works. The new data from dozens of countries in the European Union suggests that when a country allows zero-rating programs, it ends…",
            "url": "https://www.theverge.com/2019/2/11/18220889/zero-rating-programs-wireless-date-net-neutrality",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/e3dw5zihPBrogeythiPF7Sp54ms=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11515901/acastro_180608_1777_net_neutrality_0001.jpg",
            "publishedAt": "2019-02-11T22:00:34Z",
            "content": "A lack of net neutrality rules can have real-world consequences on wireless data prices, according to a new study by Epicenter.works. The new data from dozens of countries in the European Union suggest that when a country allows zero-rating programs, it ends … [+2216 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chris Welch",
            "title": "Amazon is buying mesh router company Eero",
            "description": "Amazon has announced that it’s acquiring Eero, the maker of mesh home routers.",
            "url": "https://www.theverge.com/2019/2/11/18220960/amazon-eero-acquisition-announced",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/yRslo_NxwPptnuE43tljy53nYeQ=/0x185:2040x1253/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/3370222/eerobox.0.jpg",
            "publishedAt": "2019-02-11T22:00:27Z",
            "content": "Amazon has announced that its acquiring Eero, the maker of mesh home routers. Amazon says buying Eero and its technology will help its mission to advance the smart home and it will certainly make Alexa-compatible gadgets easier to set up if Amazon also owns t… [+958 chars]"
        },
        {
            "source": {
                "id": "the-guardian-uk",
                "name": "The Guardian (UK)"
            },
            "author": "Jim Waterson",
            "title": "Public funds should be used to rescue local journalism, says report",
            "description": "Cairncross review warns that closure of local newspapers threatens democracy",
            "url": "https://www.theguardian.com/media/2019/feb/11/public-funds-should-be-used-to-rescue-local-journalism-says-report",
            "urlToImage": "https://i.guim.co.uk/img/media/bb3e614491f854eef1033a3a3990df513c740381/0_220_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=3731bb65f4401e37f8a60306bb34e731",
            "publishedAt": "2019-02-11T22:00:18Z",
            "content": "Local news coverage could disappear unless the government provides direct financial support, according to an independent report on the future of the British media, which warns the industrys collapse poses a threat to the long-term sustainability of democracy.… [+5387 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Laura Prudom",
            "title": "Daniel Radcliffe Responds to Those Wolverine Casting Rumors - IGN",
            "description": "Daniel Radcliffe says &quot;there's no truth&quot; in the Wolverine casting rumors surrounding him, but he does have a great pitch for a reboot. (He was never going to be in The LEGO Movie 2, either.)",
            "url": "https://www.ign.com/articles/2019/02/11/is-daniel-radcliffe-wolverine-casting-lego-movie-2-rumors",
            "urlToImage": "https://assets1.ignimgs.com/2019/02/11/daniel-radcliffe-wolverine-harry-potter-reboot-blogroll-1549919120656_1280w.jpg",
            "publishedAt": "2019-02-11T22:00:15Z",
            "content": "Never joke on the internet. \r\nBy Laura PrudomSometimes memes can take on a life of their own, so Daniel Radcliffe would like to set the record straight: He hasn't been approached to play Wolverine now that Hugh Jackman has hung up the claws. Last week, X-Men … [+2556 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "JONATHAN LEMIRE and ALAN FRAM",
            "title": "Budget talks resume amid pessimism over border differences",
            "description": "WASHINGTON (AP) — Politically freighted border security negotiations are teetering just days before a potential new government shutdown. The turmoil is testing the changed balance of power in Washington, with lawmakers engaged in a sparring match over immigra…",
            "url": "https://apnews.com/4cffe44a54d541b8bb7ed3a05cb7f056",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/media:a909a916f932486eade4e181dfcc9319/3000.jpeg",
            "publishedAt": "2019-02-11T22:00:09Z",
            "content": null
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Dareh Gregorian",
            "title": "Flight attendants union warns of possible airport chaos if there's another shutdown",
            "description": "The flight attendants' union is calling for demonstrations at the nation's airports Saturday if there's another shutdown - and hints at work stoppage",
            "url": "https://www.nbcnews.com/politics/politics-news/flight-attendants-union-warns-possible-airport-chaos-if-there-s-n970266",
            "urlToImage": "https://media2.s-nbcnews.com/j/newscms/2019_07/2749541/190211-sara-nelson-flight-attendants-cs-320p_37e49f53458fab26639937df571307b3.nbcnews-fp-1200-630.jpg",
            "publishedAt": "2019-02-11T22:00:06Z",
            "content": "Breaking News Emails\r\nGet breaking news alerts and special reports. The news and stories that matter, delivered weekday mornings.\r\nSUBSCRIBE\r\nFeb. 11, 2019, 10:00 PM GMT\r\nThe head of the flight attendants' union on Monday called for demonstrations at the coun… [+1838 chars]"
        },
        {
            "source": {
                "id": "australian-financial-review",
                "name": "Australian Financial Review"
            },
            "author": "Kate Burke",
            "title": "The most popular suburbs for Sydney house hunters (and where to look instead)",
            "description": "Property prices may be falling across Sydney, but the city's most popular suburbs are still out of reach for many. Here are the alternatives.",
            "url": "https://www.afr.com/real-estate/residential/nsw/the-most-popular-suburbs-for-sydney-house-hunters-and-where-to-look-instead-20190211-h1b51l",
            "urlToImage": "https://static.ffx.io/images/$zoom_1%2C$multiply_0.411522633744856%2C$ratio_1.777778%2C$width_1944%2C$x_56%2C$y_216/t_crop_custom/t_sharpen%2Cq_auto%2Cf_auto/15f4b7159edad9f61e77def35ab8bcd739ea525f",
            "publishedAt": "2019-02-11T22:00:00Z",
            "content": "\"Buyers gravitate towards searching in those suburbs but don't necessarily end up buying there,\" she said. Ms Stier noted similar, but more affordable, lifestyles could often be found in neighbouring \"bridesmaid suburbs\" and also further afield.\r\nSo where els… [+5460 chars]"
        },
        {
            "source": {
                "id": "the-telegraph",
                "name": "The Telegraph"
            },
            "author": null,
            "title": "'England are at best level yet under Eddie Jones' - Ben Youngs issues Six Nations warning to Wales",
            "description": "Ben Youngs has warned Wales that England are playing their best rugby of Eddie Jones&rsquo;s tenure and says they will travel to Cardiff, for a potential Grand Slam decider, in stronger form than when they last triumphed there in 2017.",
            "url": "http://www.telegraph.co.uk/rugby-union/2019/02/11/england-best-level-yet-eddie-jones-ben-youngs-issues-six-nations/",
            "urlToImage": "https://www.telegraph.co.uk/content/dam/rugby-union/2019/02/11/TELEMMGLPICT000188095532-xlarge_trans_NvBQzQNjv4BqC9PogZUtSpqAqO-tnweStQt3tN9Ddv3cHZNIEmYP14g.jpeg",
            "publishedAt": "2019-02-11T22:00:00Z",
            "content": "Ben Youngs has warned Wales that England are playing their best rugby of Eddie Joness tenure and says they will travel to Cardiff, for a potential Grand Slam decider, in stronger form than when they last triumphed there in 2017.\r\nEngland followed up their stu… [+445 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Olivia Kelly",
            "title": "Northside metro must not be held back by southside problems – Fingal chief",
            "description": "Paul Reid calls for Metrolink to Swords to go ahead independent of southern section",
            "url": "https://www.irishtimes.com/\t\t\t\t\t\t\t/news/environment/northside-metro-must-not-be-held-back-by-southside-problems-fingal-chief-1.3790356\t",
            "urlToImage": "https://www.irishtimes.com/image-creator/?id=1.3790355&origw=960",
            "publishedAt": "2019-02-11T21:59:50Z",
            "content": "The northside route of the States Metrolink rail line, that would connect Dublin airport and Swords to the city centre, must not be held up by issues with the southside section, the chief executive of Fingal County Council has said.\r\nPaul Reid on Monday night… [+2122 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Alex Osborn",
            "title": "Jump Force Live Pre-Launch Tournament: Schedule and Livestream Times - IGN",
            "description": "We're exclusively partnering with Bandai Namco to stream its big Jump Force pre-launch tournament live on Monday.",
            "url": "https://www.ign.com/articles/2019/02/11/jump-force-live-pre-launch-tournament-schedule-and-livestream-times?abthid=5c61f6463b9de7527d0010eb",
            "urlToImage": "https://assets1.ignimgs.com/2019/02/05/jf-1549404170470_1280w.jpg",
            "publishedAt": "2019-02-11T21:59:26Z",
            "content": "Catch the action live on Monday at 2pm PT/5pm ET. \r\nBy Alex OsbornUpdate: The live player for today's Jump Force pre-launch tournament is up!\r\nThe tournament begins at 2pm PT/5pm ET/10pm UK (Tuesday, February 12 at 9am AET). You can watch the stream in the vi… [+1307 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "Smarter Faster Revolution: The University of Pennsylvania",
            "description": "Creating equal opportunity in the workplace",
            "url": "https://www.axios.com/smarter-faster-revolution-upenn-1549593712-4f56eba1-53d7-4453-a349-66ddbd245d43.html",
            "urlToImage": "https://images.axios.com/wPo8WTNyeY4_DbxNCYGh6bPdlME=/0x175:6000x3550/1920x1080/2019/02/08/1549640666107.jpg",
            "publishedAt": "2019-02-11T21:59:24.787Z",
            "content": "Thursday afternoon Axios hosted a conversation at UPenn on gender parity and equal opportunity in the workplace. \r\nWhy it matters: Students heard from business leaders and women's equality activist Lilly Ledbetter, learning how everyone plays a role in making… [+3222 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Jonathan Vanian",
            "title": "Trump's Artificial Intelligence Initiative Needs to Show Us the Money",
            "description": "President Donald Trump's \"American Artificial Intelligence Initiative\" lacks details about the initiative's funding.",
            "url": "http://fortune.com/2019/02/11/trumps-artificial-intelligence-initiative-needs-to-show-us-the-money/",
            "urlToImage": "https://fortunedotcom.files.wordpress.com/2019/02/gettyimages-1095785900-e1549919225189.jpg",
            "publishedAt": "2019-02-11T21:58:54Z",
            "content": "President Donald Trump’s executive order executive order on Monday that is intended to cement U.S. leadership in artificial intelligence technologies lacks specifics about how much the U.S. plans to invest in automation and its effects on American workers.\r\nA… [+3741 chars]"
        },
        {
            "source": {
                "id": "the-jerusalem-post",
                "name": "The Jerusalem Post"
            },
            "author": "Gil Hoffman",
            "title": "Analysis: Too late to resuscitate",
            "description": "The sun came out, and so did Labor’s members. There were long lines in polling stations across the country, forcing an additional half hour of voting.",
            "url": "https://www.jpost.com/Israel-Elections/Analysis-Too-late-to-resuscitate-580374",
            "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/435542",
            "publishedAt": "2019-02-11T21:58:00Z",
            "content": "X\r\n Dear Reader,\r\n As you can imagine, more people are reading The Jerusalem Post than ever before.\r\n Nevertheless, traditional business models are no longer sustainable and high-quality publications,\r\n like ours, are being forced to look for new ways to keep… [+4194 chars]"
        },
        {
            "source": {
                "id": "metro",
                "name": "Metro"
            },
            "author": "Georgia Diebelius",
            "title": "Man jailed after blinding 'broken' dog in series of brutal attacks",
            "description": "RSPCA officers discovered blood splatters around the house.",
            "url": "https://metro.co.uk/2019/02/11/man-jailed-blinding-broken-dog-series-brutal-attacks-8534247/",
            "urlToImage": "https://metrouk2.files.wordpress.com/2019/02/sec_51818032-ef62_1549922257.jpg?quality=90&strip=all&w=1200&h=630&crop=1&resize=1200%2C630&zoom=1",
            "publishedAt": "2019-02-11T21:57:18Z",
            "content": "A man who battered his dog so badly that she had to have her eye removed has been jailed.\r\nTomas Ferreiras Bichon Frise Skye was discovered with a broken jaw, broken ribs, a broken bone in her back leg and 10 broken teeth.\r\nShe also suffered a ruptured eyebal… [+2718 chars]"
        },
        {
            "source": {
                "id": "cnbc",
                "name": "CNBC"
            },
            "author": "Jordan Novet",
            "title": "Amazon is acquiring home WiFi start-up Eero",
            "description": "Amazon said it's acquiring Eero for an undisclosed sum",
            "url": "https://www.cnbc.com/2019/02/11/amazon-is-acquiring-home-wifi-start-up-eero.html",
            "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/09/14/103939868-eero_lifestyle_-_garage.1910x1000.jpg",
            "publishedAt": "2019-02-11T21:56:46Z",
            "content": "Amazon on Monday said that it has acquired Eero, a start-up that developed home internet routers that can be connected with one another inside homes. Terms of the deal weren't disclosed.\r\ndiv &gt; div.group &gt; p:first-child\"&gt;\r\nGoogle has a competing prod… [+925 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Aoife Nic Ardghail, Declan Brennan",
            "title": "Man who travelled to Dublin to have sex with teenage girl he met online is jailed",
            "description": "In one incident he put a pillow on the child’s head and she passed out while he continued to have sex with her, court heard",
            "url": "https://www.irishtimes.com/\t\t\t\t\t\t\t/news/crime-and-law/courts/criminal-court/man-who-travelled-to-dublin-to-have-sex-with-teenage-girl-he-met-online-is-jailed-1.3790352\t",
            "urlToImage": "https://www.irishtimes.com/polopoly_fs/1.3790351.1549922165!/image/image.jpg",
            "publishedAt": "2019-02-11T21:56:45Z",
            "content": "A UK resident who repeatedly travelled to Dublin to have sex with a teenage girl who he claimed he was in love with has been jailed for four and a half years.\r\nThe Central Criminal Court heard that then 25-year-old man and the 16-year-old became engaged at on… [+4787 chars]"
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "\n                            David Canfield\n                          ",
            "title": "The evolution of the gay best friend in romantic comedies",
            "description": "A look at the key players who changed this trope for the better.",
            "url": "https://ew.com/movies/evolution-gay-best-friend-romantic-comedies/",
            "urlToImage": "https://ewedit.files.wordpress.com/2019/02/qgrwefa.jpg",
            "publishedAt": "2019-02-11T21:54:34Z",
            "content": "The GBF timeline overall is inescapably white. What Crazy Rich Asians’ Oliver proves is that this trend limits not only the kinds of queer faces put on screen, but queer experiences as well. Having grown up in Singapore, Oliver is forced to navigate a very co… [+660 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Shannon Liao",
            "title": "Baidu made a smart cat shelter that uses AI to tell cats and dogs apart",
            "description": "China’s top search engine company Baidu made smart cat shelters that use facial recognition to verify when a cat is approaching and open its door. The cat shelters are heated and also offer cats food and water.",
            "url": "https://www.theverge.com/2019/2/11/18220606/baidu-smart-cat-shelter-ai-facial-recognition-dogs",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/7JWnDcOm9131z7_ruLlU_ZULRKk=/0x23:1075x586/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13752611/Screen_Shot_2019_02_11_at_4.01.52_PM.png",
            "publishedAt": "2019-02-11T21:54:19Z",
            "content": "Chinas top search engine company Baidu made a smart cat shelter in Beijing that uses AI to verify when a cat is approaching and open its door. The cat shelter is heated and also offers cats food and water.\r\nBesides running Chinas main search engine, Baidu als… [+2765 chars]"
        },
        {
            "source": {
                "id": "the-guardian-au",
                "name": "The Guardian (AU)"
            },
            "author": "Nicola Davis",
            "title": "Ancient rock wiggles could be earliest trace of moving organism",
            "description": "Scientists say 2.1bn-year-old fossils may show evidence of self-propelled motion",
            "url": "https://www.theguardian.com/science/2019/feb/11/wiggly-structures-in-ancient-rocks-could-be-earliest-trace-of-moving-organism",
            "urlToImage": "https://i.guim.co.uk/img/media/024e000ca3cc2aa285c530a98fe2e1add6369683/9_110_735_441/master/735.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=1dbb6bde44aaab7f7122e85074c71c99",
            "publishedAt": "2019-02-11T21:53:25Z",
            "content": "A collection of short wiggly structures discovered in ancient rocks could be the earliest fossilised traces of organisms able to move themselves, scientists say.\r\nIf scientists are correct, the 2.1bn-year-old structures point to an earlier origin than general… [+5175 chars]"
        },
        {
            "source": {
                "id": "vice-news",
                "name": "Vice News"
            },
            "author": "Rex Santus",
            "title": "Cleveland Browns sign Kareem Hunt two months after video surfaces of him kicking a woman",
            "description": "Hunt is still on the Commissioner’s Exempt List pending an NFL investigation into the video as well as another alleged incident",
            "url": "https://news.vice.com/en_us/article/3kgad5/cleveland-browns-sign-kareem-hunt-two-months-after-video-surfaces-of-him-kicking-a-woman",
            "urlToImage": "https://video-images.vice.com/articles/5c61e828f0e7c300076dd00f/lede/1549920819536-AP_18334841146154.jpeg?crop=1xw:0.7317355117139334xh;center,center",
            "publishedAt": "2019-02-11T21:53:17.0635986+00:00",
            "content": "NFL running back Kareem Hunt was cut from Kansas Citys lineup in December, but the Cleveland Browns just announced theyve signed him, once again drawing attention to the leagues lax handling of domestic abuse. \r\n The Chiefs cut the 23-year-old Ohioan after a … [+3165 chars]"
        },
        {
            "source": {
                "id": "the-american-conservative",
                "name": "The American Conservative"
            },
            "author": null,
            "title": "Bolton and Trump’s Obvious Lies About Iran",
            "description": "Bolton and Trump are attempting to promote the lie that Iran is still seeking nuclear weapons to justify their aggressive and bankrupt Iran policy.",
            "url": "https://www.theamericanconservative.com/larison/bolton-and-trumps-obvious-lies-about-iran/",
            "urlToImage": "https://www.theamericanconservative.com/wp-content/uploads/2018/10/trump-advisors.jpg",
            "publishedAt": "2019-02-11T21:53:15.9385943Z",
            "content": "The Trump administration is once again repeating some of its many lies about Iran:\r\nA message to the Ayatollah of Iran: \"For all your boasts, for all your threats to the life of the American President, YOU are responsible for terrorizing your own people.\" #40… [+2180 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Historian: Trump reaching for cheap laughs with tweet - CNN Video",
            "description": "Presidential historian Douglas Brinkley responds to President Donald Trump's tweet that appeared to be mocking a reference to the Trail of Tears, the forced relocation of thousands of Native Americans which led to thousands of deaths, and a subsequent post by…",
            "url": "http://us.cnn.com/videos/politics/2019/02/11/trump-jr-native-american-genocide-trail-tears-tweet-brinkley-bts-nr-vpx.cnn",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190211162139-trump-jr-native-american-genocide-trail-tears-tweet-brinkley-bts-nr-vpx-00010219-super-tease.jpg",
            "publishedAt": "2019-02-11T21:53:12.2823541Z",
            "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News",
            "title": "Michelle Carter, woman convicted in texting suicide case, heads to jail",
            "description": "The Massachusetts woman who was convicted of involuntary manslaughter for encouraging her boyfriend to kill himself has been jailed years after his death.",
            "url": "https://www.foxnews.com/us/michelle-carter-woman-convicted-in-texting-suicide-case-heads-to-jail",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/02/ContentBroker_contentid-4db018dd8b75440f87d092746f5f472e.png",
            "publishedAt": "2019-02-11T21:52:44.2096761Z",
            "content": "The Massachusetts woman who was convicted of involuntary manslaughter for encouraging her boyfriend to kill himself has started her jail sentence.\r\nMichelle Carter, 22, was escorted from a courtroom in Taunton on Monday and transported to jail. She was senten… [+2099 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Mike Allen",
            "title": "Axios PM",
            "description": "Mike Allen’s afternoon take on the most important news of the day. Weekday afternoons",
            "url": "https://www.axios.com/newsletters/axios-pm-fa41b27d-f390-4502-a8db-e484b5840bc4.html",
            "urlToImage": "https://images.axios.com/xUim_xkYDA-IP-8PUxj5LdXSSEA=/1920x1080/smart/social/pm3.jpg",
            "publishedAt": "2019-02-11T21:52:32.8747496Z",
            "content": "Nearly 5 million U.S. children used tobacco products last year, the Centers for Disease Control and Prevention warned today with the headline \"Progress erased: youth tobacco use increased during 2017-2018.\"\r\nThat's up 1.3 million from 2017 and is primarily dr… [+1691 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Jordan Fabian",
            "title": "Trump: Democrats want criminals in the US",
            "description": "President Trump on Monday blasted Democrats who want to reduce the number of detention beds in border-security talks, accusing them of wanting to allow immigrants who have committed crimes to roam freely in the U.S.",
            "url": "http://thehill.com/homenews/administration/429485-trump-democrats-want-criminals-in-the-us",
            "urlToImage": "https://thehill.com/sites/default/files/trumpdonald_021119.jpg",
            "publishedAt": "2019-02-11T21:49:08Z",
            "content": "President TrumpDonald John TrumpTrump to sign executive order promoting artificial intelligenceTrumps new Syria timetable raises concern among key anti-ISIS alliesTrump officials considering Mar-a-Lago for next meeting with China's Xi: reportMORE on Monday bl… [+2433 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Richard Cowan",
            "title": "U.S. lawmakers meet on border security, scrambling to avert shutdown",
            "description": "The top four Democratic and Republican congressional negotiators on border security funding resumed talks on Monday, with the possibility of another partial U.S. government shutdown looming if they fail to reach a deal by a Friday deadline.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/O6GR108QIqI/u-s-lawmakers-meet-on-border-security-scrambling-to-avert-shutdown-idUSKCN1Q01NV",
            "urlToImage": "https://s4.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355489292&w=1200&r=LYNXNPEF1A1AZ",
            "publishedAt": "2019-02-11T21:47:50Z",
            "content": "WASHINGTON (Reuters) - The top four Democratic and Republican congressional negotiators on border security funding resumed talks on Monday, with the possibility of another partial U.S. government shutdown looming if they fail to reach a deal by a Friday deadl… [+4818 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "https://www.abc.net.au/news/michael-slezak/9641812",
            "title": "The hidden cost of storing all those thousands of selfies in the cloud",
            "description": "Chances are all your photos and videos are being stored on cloud servers that burn a lot of power. Now, data centres are joining the wave of Australian companies going carbon neutral.",
            "url": "http://www.abc.net.au/news/2019-02-12/record-number-of-australian-businesses-go-carbon-neutral/10794384",
            "urlToImage": "https://www.abc.net.au/news/image/5864912-16x9-700x394.jpg",
            "publishedAt": "2019-02-11T21:46:29Z",
            "content": "Updated \r\nFebruary 12, 2019 08:46:29\r\nIf you've been trying to reduce your carbon footprint, you probably haven't thought about the role your selfies could play. \r\nPhotos, emails, phone backups likely end up on cloud servers, which sit in massive data centres… [+6885 chars]"
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "Stuart Marsh",
            "title": "Statewide fire ban in place as Sydney braces for 37 degree scorcher",
            "description": "High temperatures, hot winds and low humidity present the perfect storm for bushfire risk.",
            "url": "https://www.9news.com.au/wild-weather/2019/02/12/08/25/weather-nsw-sydney-37-degrees-total-fire-ban",
            "urlToImage": "http://prod.static9.net.au/_/media/2019/02/12/09/04/nsw-heat-split.jpg",
            "publishedAt": "2019-02-11T21:46:00+00:00",
            "content": "A total statewide fire ban has been put in place as NSW braces for a scorching day, described by fire authorities as a “one day wonder”.\r\nIn Sydney the mercury is tipped to reach 37 degrees by midday, while parts of north-western NSW are tipped to exceed 40 d… [+1709 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "U.S. lawmaker apologizes after House leaders condemn her 'anti-Semitic tropes'",
            "description": "Democratic lawmaker Ilhan Omar apologized on Monday after party leaders condemned her use of \"anti-Semitic tropes\" in suggesting that U.S. congressional support for Israel is a result of campaign donations.",
            "url": "http://feeds.reuters.com/~r/reuters/topNews/~3/huTrMcQcLyk/u-s-lawmaker-apologizes-after-house-leaders-condemn-her-anti-semitic-tropes-idUSKCN1Q02CY",
            "urlToImage": "https://s4.reutersmedia.net/resources/r/?m=02&d=20190211&t=2&i=1355551876&w=1200&r=LYNXNPEF1A1OT",
            "publishedAt": "2019-02-11T21:42:56Z",
            "content": "WASHINGTON (Reuters) - Democratic lawmaker Ilhan Omar apologized on Monday after party leaders condemned her use of “anti-Semitic tropes” in suggesting that U.S. congressional support for Israel is a result of campaign donations. \r\n“Anti-Semitism is real and … [+1282 chars]"
        }
    ];
}
