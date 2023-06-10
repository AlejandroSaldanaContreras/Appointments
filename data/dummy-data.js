import Institution from "../models/institution";
import Professional from "../models/professional";

export const INSTITUTIONS = [
    new Institution("i1", "Antal", "https://scontent.fcyw4-1.fna.fbcdn.net/v/t39.30808-6/273011263_105905285362091_5678165943676540814_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGYKIElfbnkZdYdGeXv3ToGnoMJPaqp1Eaegwk9qqnUWqaG_4iRbc1pn7MNUZrOUYDMd23VbRj9RwKvw1Qakbw&_nc_ohc=eCum7wO8ybgAX_qsLei&_nc_ht=scontent.fcyw4-1.fna&oh=00_AfAMtgVffT0HDopxsZ9MJP0GQT3FJMtxlbirHfTldDgbbQ&oe=64713F5C", "#2596be"),
    new Institution("i2", "Mac", "https://scontent.fcyw4-1.fna.fbcdn.net/v/t39.30808-6/273673571_5069148063146926_4246703258193906455_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9lHfOH5o2e-hfTRdu714U_vi-2VoBMgn--L7ZWgEyCVc-kel5weK9bPN2NLQA8L2u9RC0asw_oc-hKa8yUDkE&_nc_ohc=tEVDDpEuNeIAX9-Lz_1&_nc_ht=scontent.fcyw4-1.fna&oh=00_AfDHTz8VUJ2dipp7LUqIZ_GAPbuee1_sWNXzhsMulsb8vQ&oe=64714B61", "#96be25"),
    new Institution("i3", "CISAME", "https://scontent.fcyw4-1.fna.fbcdn.net/v/t39.30808-6/300377013_592749545630677_7822253516507423731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEkx_-IPlJmf3ZHl4cR3CcEk4gkq2cFM1CTiCSrZwUzULzOt06bfKD71BlYTVNSETrYKea5WGT0b4ufSo5TYjlj&_nc_ohc=hXuANqNm0bgAX-953Iq&_nc_ht=scontent.fcyw4-1.fna&oh=00_AfCncSFM3hfC4CkqsG8pqY4rEE-L8txIRyHBM7TjzCF5fQ&oe=6471231A", "#C33411"),
    new Institution("i4", "Nutricion y Vida A.C.", "https://scontent.fcyw4-1.fna.fbcdn.net/v/t39.30808-6/327422957_5747561362004249_5789280174161720880_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHsDAD7oOrIalcKc3TQ623tdDV1eq49m_90NXV6rj2b_3BrNHERwVyftV61ah7AfsBc6nlThV1O653_2RO_HZsi&_nc_ohc=edTz_HVhknsAX85XwyW&_nc_ht=scontent.fcyw4-1.fna&oh=00_AfBKkJa-tBXa7MojcMF52AsoW2Twrd8KsTnBYv01ePcGfg&oe=6471324D", "red")
];

export const PROFESSIONALS = [
    new Professional("p1", ["i2"], "Alicia Perez", "Nutriologo", "L-V 9:00am - 6:00pm", 
    "https://images.unsplash.com/photo-1585358682246-23acb1561f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=762&q=80",
    "4.5", "Av real de los cerezos #156 Gran Hacuienda"), 
    new Professional("p2", ["i1"],"Andres Garcia", "Psicologo", "L-S 9:00am - 6:00pm", 
    "https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    "4.2", "Lic. Andres Quintana Roo 843 Las Fuentes"),
    new Professional("p3", ["i3"],"Pedro Paramo", "Fisioterapeuta", "L-J 8:00am - 6:00pm",
    "https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "4.9", "Ave, Ferrocarril Central 709, Col. Los Laureles"),
];