import { FaUsers, FaChartPie, FaPercent  } from "react-icons/fa";
import { FaChartColumn, FaArrowUp, FaArrowDown } from "react-icons/fa6";

interface CardData {
    id: number;
    title: string;
    color: string;
    icon: React.ReactElement;
    number: string;
    rate: string;
    desc: string;
    rateIcon: React.ReactElement;
    rateColor: string;
}


function DashboardCards() {
    const cardsData: CardData[] = [
        {
            id: 1,
            title: "traffic",
            color: "var(--red)",
            icon: <FaChartColumn />,
            number: "350,897",
            rate: "3.48%",
            desc: "Since last month",
            rateIcon: <FaArrowUp />,
            rateColor: "var(--green)",
        },
        {
            id: 2,
            title: "new users",
            color: "var(--orange)",
            icon: <FaChartPie />,
            number: "2,356",
            rate: "3.48%",
            desc: "Since last week",
            rateIcon: <FaArrowDown />,
            rateColor: "var(--red)",
        },
        {
            id: 3,
            title: "sales",
            color: "var(--pink)",
            icon: <FaUsers />,
            number: "924",
            rate: "1.1%",
            desc: "Since yesterday",
            rateIcon: <FaArrowDown />,
            rateColor: "var(--red)",
        },
        {
            id: 4,
            title: "performance",
            color: "var(--blue)",
            icon: <FaPercent />,
            number: "49,65%",
            rate: "12%",
            desc: "Since last month",
            rateIcon: <FaArrowUp />,
            rateColor: "var(--green)",
        },
    ]
    return (
        <div className="dasboard-cards gap-8 pt-20 pb-50 px-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardsData.map((element) => (
                <div key={element.id} className="bg-white w-full p-5 rounded-sm">
                    <div className="card-top flex justify-between items-center">
                        <div className="card-data">
                            <div className="card-title uppercase text-xs font-bold">{element.title}</div>
                            <div className="card-number text-lg font-bold">{element.number}</div>
                        </div>
                        <div className="card-icon text-white w-12 h-12 rounded-full flex justify-center items-center" style={{ backgroundColor: element.color }}>
                            {element.icon}
                        </div>
                    </div>
                    <div className="card-bottom flex items-center justify-between mt-3">
                        <div className="card-rate flex items-center justify-between gap-1 text-sm"
                        style={{color: element.rateColor}}
                        >
                            {element.rateIcon}{element.rate}
                            </div>
                        <div className="card-desc text-sm">{element.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashboardCards