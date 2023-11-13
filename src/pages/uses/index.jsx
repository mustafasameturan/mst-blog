import UsesListItem from "~/pages/uses/components/uses-list-item/index.jsx";
import {useTranslation} from "react-i18next";

export default function Uses() {

    const { t } = useTranslation();

    const uses= [
        {
            title: t ("uses.computer_title"),
            // eslint-disable-next-line react/no-unescaped-entities
            children: t("uses.computer_description"),
            url: "https://pt.com.tr/macbook-air-133-inc-m1-8cpu-7gpu-16gb-256gb-uzay-grisi-z1240009k"
        },
        {
            title: t ("uses.screen_title"),
            // eslint-disable-next-line react/no-unescaped-entities
            children: t("uses.screen_description"),
            url: "https://www.amazon.com.tr/Samsung-LC24F390FHRXUF-Curved-Siyah-Monit%C3%B6r/dp/B09C8CL6RH/ref=sr_1_43?adgrpid=118760341814&hvadid=509821811924&hvdev=c&hvlocphy=1012782&hvnetw=g&hvqmt=e&hvrand=13735666790590048422&hvtargid=kwd-337477244139&hydadcr=5595_2236817&keywords=samsung+curved+monit%C3%B6r&qid=1699819395&sr=8-43"
        },
        {
            title: t ("uses.chair_title"),
            // eslint-disable-next-line react/no-unescaped-entities
            children: t("uses.chair_description"),
            url: "https://www.hawkchair.com/urun/fab-v5-kumas-oyuncu-koltugu"
        },
        {
            title: t ("uses.keyboard_title"),
            // eslint-disable-next-line react/no-unescaped-entities
            children: t("uses.keyboard_description"),
            url: "https://www.logitech.com/tr-tr/products/keyboards/mx-keys-s.920-011594.html"
        },
        {
            title: t ("uses.mouse_title"),
            // eslint-disable-next-line react/no-unescaped-entities
            children: t("uses.mouse_description"),
            url: "https://www.logitech.com/tr-tr/products/mice/m720-triathlon.910-004791.html"
        }
    ]

    return (
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">

                <img src="/img/icon-uses.png" alt="icon uses"/>
                <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                    {t("uses.title")}
                </h1>

                <div className="pt-16 lg:pt-20">
                    <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                        {t("uses.sub_title")}
                    </h3>
                    <ul className="list-disc pl-10">
                        {uses.map((item, index) => (
                            <UsesListItem
                                key={index}
                                title={item.title}
                                url={item.url}
                            >
                                {item.children}
                            </UsesListItem>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}