export function formatBrowser(ua) {


    if (ua === undefined || ua === "")
        return "";

    var browser = "";

    if ((ua.indexOf("OPR/")) !== -1) {
        browser = "Opera";
    }
    else if ((ua.indexOf("Opera")) !== -1) {
        browser = "Opera";
    }
    else if ((ua.indexOf("MSIE")) !== -1) {
        browser = "Microsoft Internet Explorer";
    }
    else if ((ua.indexOf("Edge")) !== -1) {
        browser = "Internet Explorer";
    }
    else if ((ua.indexOf("Chrome")) !== -1) {
        browser = "Chrome";
    }
    else if ((ua.indexOf("Safari")) !== -1) {
        browser = "Safari";
    }
    else if ((ua.indexOf("Firefox")) !== -1) {
        browser = "Firefox";
    }
    else if ((ua.indexOf("Trident/")) !== -1) {
        browser = "Internet Explorer";
    }

    return browser;
}
