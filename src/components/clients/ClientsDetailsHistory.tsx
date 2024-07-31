import {Textarea} from "@nextui-org/input";

export default function ClientsDetailsHistory() {
    const historyQuestions = [
      "Quale attività fisica pratica?",
      "Quali interessi coltiva nel suo tempo libero?",
      "Ha subito traumi o incidenti?",
      "Interventi chirurgici? Se sì, in quale anno?",
      "Ha disturbi muscolari o articolari?",
      "Altre osservazioni",
      "Com’ è venuto a conoscenza del nostro studio?",
      "Pratica già la tecnica Pilates? Se sì, da quanto tempo e con quale frequenza?",
      "Se no, cosa sa della tecnica Pilates?",
      "Quali sono le sue aspettative riguardo l’ allenamento?"
    ]
    
    return(
        <div className="px-5 flex flex-col gap-4">
            <h2 className="text-2xl mt-12 pb-6">Anamnesi</h2>
            {historyQuestions.map((question: string, key: number) => {
              return (
                <Textarea variant="flat" label={question} key={key} readOnly></Textarea>
              );
            })}
        </div>
    )
}