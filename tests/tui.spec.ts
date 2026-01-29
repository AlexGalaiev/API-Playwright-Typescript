import {test} from "../utils/fixtures"

test('Tui login user', async({api, config})=>{
    let response = await api
    .url(config.tuiURL)
    .path('/accounts.login')
    .headers({
        "content-type":"application/x-www-form-urlencoded",
        "Cookie":"FirstPageSeen=; dtCookie=v_4_srv_3_sn_C7DF31191C8430D3838CDCB19CADAC04_perc_100000_ol_0_mul_1; P_1008=1008D_v2; kndctr_41E27DA552A6473A0A490D4D_AdobeOrg_cluster=irl1; PIM-SESSION-ID=JIJ5uydQdabE5LCO; gmid=gmid.ver4.AtLtqIsR_A.YkMCLK04urZspW8f8tCXaL6epq1SOeKnW-QVOviEyJBFt3C_2FT5_q8gOGIHnGvt.AciT0g8guNofWVf-UHIDZo9rriXAfmuyLnAEiE3ioksoBahxBa9ZcbdHJy7Gptjh3EIp-zIvf7NM6e2ldacLig.sc3; ucid=PbV6U3uLkV_5Jux3jOWDgw; hasGmid=ver4; gig_bootstrap_3_2a2E-f6RXOVzzgC24sReKDz4N8luhuZcrGKAxp5v7W6T3SZEPpsxOhV3C5TXsV3G=login_ver4; CookiesAccepted=yes; check=true; AMCVS_41E27DA552A6473A0A490D4D%40AdobeOrg=1; s_cc=true; s_nr30=1769511488371-New; s_tslv=1769511488372; bm_ss=ab8e18ef4e; bm_so=A4A2F1DE0F0A7DE1D9EFE9010920F0B25CF52F142BD12232ED679D22C9A898E8~YAAQYUllXwqBp9ubAQAASzixBAaoOOzZhCXyAGN+3yF9+ArEvqkjm+UfXH8+rlw/hbBkDiDrptoeVfI0vBdlOdaJxHA5+U7yRriYUcgNkQQ8j5OkxCBh/WvDjex5LU+AC3IpQPHRyzDVKtJKW5NJBTKrcgTtcEIIXs+/a7hjVBsMUt5RHrgcn4JC6U8b2EfWOrEwQVvUw0cI0xNjdLBGVffOdTG6RqcBM1AcKqROV2ErhtfUPMhiHg0hJMErjnT9sLSKJjYf2RcMvPkvFHoh0ZuHHDrkPdSipwBKO5/jrgtlu5lT0IZHiFubYGQdoHmDgyfueM408Wsou0aSOLp5BP80LDBUk2MHwSvKR4EhrU50SR0Qm5rX4PQ/DjKW1m1X+ivY8opoj0tPPT6ahhB1VJIGqDj5eSjZ6OFE9aCcQ1sbDCfxnAelB843XBxfCgkicz8CXuJpiJGM1w==; utag_main=_sn:7$_se:1%3Bexp-session$_ss:1%3Bexp-session$_st:1769607049703%3Bexp-session$ses_id:1769605249703%3Bexp-session$_pn:1%3Bexp-session$v_id:019bff188dbb0018f8c1fd7d53e805075001a06d00942$dc_visit:1$dc_event:1%3Bexp-session$vapi_domain:tui.nl; mboxEdgeCluster=37; AMCV_41E27DA552A6473A0A490D4D%40AdobeOrg=-1712354808%7CMCMID%7C03619655431999805204905784509002609159%7CMCIDTS%7C20481%7CMCAID%7CNONE%7CMCOPTOUT-1769612450s%7CNONE%7CvVersion%7C4.3.0; mbox=PC#69c3e55ce9344784b6af7647bebf4496.37_0#1832850051|session#20f64ec1a97f40b5839a122725ac92b5#1769607111; bm_s=YAAQYUllX2uDp9ubAQAAVkKxBATCWVcDBbJ/Q3HfIcpHlosHsTCi2NIRlJaaTAN06eLdbgNKp7dxj+f6ovNoVQVJ7MBED74OwtzxrvZUU+TzNMR93xMrOhjfIB+mC4ez7GHHlDbfeYl/5OzVbamyp20XA0O6ffFgkHyxYd7tNGtfhHq2PMulxkD3JV8c5USAutNECMYibUkrgXbX0PyFhNQ046xao288ysEL8Jf0sKvUE55kRTpA0I9aJLAWUtSa427ue1SUzoOmlEjyUuI+wiwKR7NK1c3s4tLBGUQ9igYaiPkSvN1mauHQvPq9lNQRXY16my5rkFD52viEq4S0u6Jwy0Vqt7ZtdugOS/Xa3KsW9+ezJGBOIl775qdaeerL55b0CS/GVGsGMssYSYBjO0N4oWGl6Hm6TEBra2enBRrh3xa1xDSfA8Y21k4z4BqEAL1JIbvz2KztlsT2O/sjQ2Ul0kJVlrpdIAa2tWDe1cRmxF6L2N9J8a5lhy85GnspvS25vSu1PBu3d6a04KOnJNKikzMKkzJRDpekodFmBQxJviK4hWbxgEaYgOCCZWnmGsdQTzWYqc/FaPYv"
    })
    .body({
        "loginID":"sashagalaievsecond@gmail.com",
        "password":"Test123!",
        "APIKey":"3_2a2E-f6RXOVzzgC24sReKDz4N8luhuZcrGKAxp5v7W6T3SZEPpsxOhV3C5TXsV3G",
        "pageURL":"https://www.tui.nl/mijntui/"
    })
    .POST_Request(200)
    console.log(response)
})