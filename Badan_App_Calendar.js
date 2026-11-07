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
}

