type Props = {
  className: string,
  children: JSX.Element | JSX.Element[]
}



export default function DashboardBlock({className, children}: Props) {
  
  return (
    <div className={`${className} p-6 box-border border-2 border-neutral-100 shadow-sm rounded-2xl bg-white flex gap-6 justify-start items-start wrap`}>
      {children}
    </div>
  )
}
