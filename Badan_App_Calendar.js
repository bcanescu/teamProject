const Calendar =["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie",
                "August", "Septembrie", "Octombire", "Noiembrie", "Decembrie"
];

function VerificaZileleLunii( luna, an )
{
   const anBisect=(an%4==0 && an%100!=0) ||(an%400==0)

   switch(luna)
   {
    case Calendar[1]:
        if(anBisect)
        {
            console.log(`${an} este bisect. Luna ${luna} are 29 de zile!`);
        }
        else{
            console.log(`Anul NU este bisect. Luna ${luna} are 28 de zile!`);
        }
        break;
    case Calendar[3]:
    case Calendar[5]:
    case Calendar[8]:
    case Calendar[10]:
        console.log(`Luna ${luna} are 30 de zile.`)
        break;
    default:
        console.log(`Luna ${luna} are 31 de zile.`)
        break;
   }
   return true;
}

const DateleCalendarului=[]

const eveniment={
    nume: "Unihack 2026",
    ziua: 13,
    luna: "Noiembrie", 
    an: 2026, 
    locatie: "MX_Museum_Timisoara",
    participare: true,
    futureparticipation: true
};

if(VerificaZileleLunii(eveniment.luna, eveniment.an)==true)
{
    DateleCalendarului.push(eveniment);
    console.log("Evenimentul a fost adaugat in calendar");
    console.log(DateleCalendarului);
}


//Adisarea in HTML//

if (VerificaZileleLunii(eveniment.luna, eveniment.an) === true) {
    DateleCalendarului.push(eveniment);
    console.log("Evenimentul a fost adaugat in calendar");
    
    
    const afisaj = document.getElementById("calendar-afisare");
    afisaj.innerHTML = `
        <h2>📅 Eveniment Nou Adăugat!</h2>
        <p><strong>Nume:</strong> ${eveniment.nume}</p>
        <p><strong>Data:</strong> ${eveniment.ziua} ${eveniment.luna} ${eveniment.an}</p>
        <p><strong>Locație:</strong> ${eveniment.locatie}</p>
        <p><strong>Participare:</strong> ${eveniment.participare ? "Da" : "Nu"}</p>`;
}
