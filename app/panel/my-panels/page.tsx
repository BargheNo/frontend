// import Layout from "../../layout"

import PanelCard from "@/components/PanelCard/PanelCard"

const Settings = () => {
  return (
    <div className="min-h-full flex flex-col bg-[#e9e7eb] text-white py-8 px-14">
      <h1 className="text-[#003a8b] text-3xl mb-6 font-black">پنل‌های من</h1>
      <div className="flex flex-col text-gray-800 rounded-2xl overflow-hidden shadow-[-6px_-6px_16px_rgba(255,255,255,0.8),6px_6px_16px_rgba(0,0,0,0.2)]">
        <PanelCard
          panelName="پنل باغ 1"
          technicalDetails={{
            capacity: 5.2,
            todayProduction: 12.3,
            efficiency: 92,
          }}
          address="باغ مهرشهر کرج"
        />
        <PanelCard
          panelName="پنل باغ 2"
          technicalDetails={{
            capacity: 5.2,
            todayProduction: 12.3,
            efficiency: 92,
          }}
          address="باغ شیراز"
        />
        <PanelCard
          panelName="پنل باغ 3"
          technicalDetails={{
            capacity: 5.2,
            todayProduction: 12.3,
            efficiency: 92,
          }}
          address="باغ تالش"
        />
      </div>
      {/* <div className="flex w-full gap-2">
        <div className="w-full rounded-lg p-3 text-gray-800 shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_1px_1px_3px_rgba(0,0,0,0.2)]">
          زیربخش ها با سایه های inset
        </div>
        <div className="w-full rounded-lg p-3 text-gray-800 shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5),inset_1px_1px_3px_rgba(0,0,0,0.2)]">
          زیربخش ها با سایه های inset
        </div>
      </div> */}
    </div>
  )
}

export default Settings