import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import styles from "../about.module.css"
async function getInfo() {
    const res = await fetch('https://berd.dahk.am/api/getInfo', { cache: "no-store" })
    return res.json()
}

const Page = async () => {
    const info = await getInfo();
    const data = info.data;
    return (
        <div>
            <PageBanner title={''}/>

            <div className={styles.header}>
                <h1>«Բերդ» պարային անսամբլ </h1>
            </div>
            <div className={styles.container}>
                Հայկական ժողովրդական  «Բերդ» պարի նախահիմքը պատմական Հայաստանի Վասպուրական նահանգի «Գմբեթախաղ» ծիսական պարախաղն է, որ գալիս է դեռևս հազարամյակների խորքից։
                Հայաստանի վաստակավոր կոլեկտիվ «Բերդ» պարային անսամբլը հիմնադրվել է Երևանում 1963 թվականին, Հայաստանի Հանրապետության ժողովրդական արտիստ Բորիս Գևորգյանի կողմից։
                1963-1966 թվականներին անսամբլի գեղարվեստական ղեկավար Բորիս Գևորգյանը, իր սաների ուսուցանելով հայկական պարի գաղտնիքները, պատրաստում է առաջին համերգային ծրագիրը և այն ներկայացնում Հայաստանի մի շարք շրջաններում։
                Պարախմբի առաջին ծանոթությունը արտասահմանյան հանդիսատեսի հետ 1967 թվականին էր, երբ առաջին անգամ նորաստեղծ անսամբլը մեկնում է Լատվիա՝ մասնակցելու Ռիգայում կայանալիք միջազգային փառատոնին և արժանանում է դափնեկրի կոչման։
                Հետագա տարիներին՝ 1970-80- ական թվականներին, «Բերդ» պարային անսամբլը մասնակցում թ Լեհաստանում, Հունաստանում, Կիպրոսում, Հունգարիայում, Բուլղարիայում, Ալժիրում, Ավստրիայում և այլ երկրներում կայացած միջազգային փառատոնների, պետական-կառավարական միջոցառումների, հայկական մշակույթի օրերի՝ բազմիցս արժանանալով կառավարական պատվոգրերի, միջազգային պարգևների և գլխավոր մրցանակների։
                Խորհրդային Հայաստանի կառավարությունը, բարձր գնահատելով «Բերդ» պարային անսամբլի ստեղծագործական գործունեությունը, 1973 թվականին անսամբլին շնորհում է «Ժողովրդական կոլեկտիվի» պատվավոր կոչում, իսկ 1982 թվականին անսամբլը արժանանում է «Հայաստանի լենինյան կոմերիտմիության մրցանակի դափնեկրի» կոչմանը։ Կոչում, որին այդ ժամանակաշրջանում արժանանում էին միայն մշակութային բնագավառում առանձնահատուկ ձեռքբերումներ ու ներդրումներ արձանագրած, բարձրարվեստ ու բացառիկ համույթները։
                Պարարվեստում մեծ փորձ կուտակած և իր անձը հաստատած արվեստագետը՝ ՀՀ ժողովրդական արտիստ Բորիս Գևորգյանը, 90-ականների սկզբին պարախմբի բեմադրական աշխատանքները վստահում և փոխանցում է որդուն՝ Կարեն Գևորգյանին՝ հավատալով, որ որդին՝ իր սանը, դառնալու է սկսած գործի իսկական շարունակողը և հավատավոր պահապանը։ Կարեն Գևորգյան իր ծնողից և ուսուցչից ժառանգած հրաշագեղ արվեստա դասդասեց և դարձրեց կատարյալ։ Կարեն Գևորգյանի բեմադրած պարերում գերիշխում է ազգային մտածողությունը։ Նրա բեմադրությունները նոր որակ հաղորդեցին մեր ազգային պարերին, հղկեցին և մշակեցին դրանք կատարելության հասցնելու անդադար մղումով։ Հավատարիմ մնալով հայկական ժողովրդական պարարվեստի ակունքներին՝ Կարեն Գևորգյանը «Բերդ» պարային անսամբլում իրականացնում է շուրջ յոթ տասնյակ պարային նոր բեմադրություններ, որտեղ ներկայացվում են ծիսական, աշխատանքային, քնարական, ռազմական, կատակային և այլ բնույթի պարեր, որոնք իավամբ կարելի է դասել հայ ազգային պարարվեստի դասական նմուշների շարքին։
                Բարձր գնահատելով հայկական պարարվեստին մատուցած ծառայություննրը՝ 2008 թվականին ՀՀ նախագահի հրամանագրով Կարեն Գևորգյանն արժանանում է ՀՀ մշակույթի վաստակավոր գործչի պատվավոր կոչմանը։
                Վստահաբար կարելի է ասել, որ վերջին տասնամյակններում «Բերդ» պարային անսամբլի ձեռք բերած միջազգային համբավն ու հեղինակությունը սերտորեն կապված է նաև անսամբլի տնօրեն Ստեփան Գևորգյանի անվան հետ։ Նրա իրականացրած կազմակերպչական և պրոդյուսերական մեծածավալ աշխատանքների շնորհիվ «Բերդ» պարային անսամբլը մասնակցել է հարյուրավոր միջազգային փառատոնների, մենահամերգների՝ արժանանալով օտարազգի հանդիսատեսի համակրանքին, սիրուն և բարձր գնահատանքին։
                1990- ական թվականներին «Բերդ»-ը իր մասնակցությունն է բերել Ֆրանսիայում, Թայվանում, Իտալիայում, Շվեյցարիայում, Գերմանիայում, Ավտրիայում, Իսպանիայում կայացած բազմաթիվ միջազգային ազգագրական փառատոնների և մենահամերգների։
                «Բերդ» պարային անսամբլի տարեգրության էջերում ոսկե տառերով է առանձնանում 2000 թվականը. Առաջին անգամ ներկայացնելով Հայաստանը Ֆրանսիայի Դիժոն քաղաքում կայացած ժողովրդական պարերի միջազգային մրցույթում՝աշխարհի ավելի քան  25 պարախմբերի մեջ «Բերդ» պարային անսամբլը դառնում է հաղթողէ արժանանալով ոսկե մեդալի։
                2000 թվականից ցայսօր Հայաստանի վաստակավոր կոլոկտիվ «Բերդ» պարային անսամբլն իր հաղթարշավն է շարունակում ինչպես Հայաստանում, այնպես էլ միջազգային բեմերում՝ մասնակցլով Ֆրանսիայում, Իտալիայում, Պորտուգալիայում, Իսպանիայում, Բելգիայում, Շվեյցարիայում, Գերմանիայում, Ռուսաստանում, Հունաստանում, ԱՄՆ-ում և այլ երկրներում կայացած ժողովրդական պարերի միջազգային հանրահայտ փառատոնների, հայկական մշակութային օրերի և մենահամերգների՝ բազմիցս արժանանալով պարգևների և մրցանակների։
                Միաժամանակ «Բերդ» պարային անսամբլը իր մասնակցությունն է բերել Հայաստանի Հանրապետությունում կազմակերպված պետական-կառավարական բազմաթիվ միջոցառումների և հանդիսությունների։
                2009 թվականին ՀՀ նախագահի հրամանագրով «Բերդ» պարային անսամբլին շնորհվել է «Հայաստանի Վաստակավոր Կոլեկտիվ» պատվավոր կոչումը։
                Ընդհանուև առմամբ Հայաստանի վաստակավոր կոլեկտիվ «Բերդ» պարային անսամբլը իր ստեղծագործական գործունեության ընթացքում շրջագայել է աշխարհի ավելի քան 30 երկրներում, մասնակցել շուրջ 500 միջազգային փառատոնների, հադես եկել շուրջ 1000 մենահամերգներով և ունեցել ավելի քան մեկ միլիոն հանդիսատես։
            </div>
        </div>
    );
};

export default Page;