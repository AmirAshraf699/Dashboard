import DashboardChartOne from "../components/DashboardChartOne"

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="charts px-15 flex items-center">
                <DashboardChartOne />
            </div>
        </div>
    )
}

export default Dashboard