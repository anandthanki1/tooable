import moment from 'moment'

const Today: React.FC = (): JSX.Element => {
  return (
    <h1 className="text-xl">{`Today - ${moment().format('MM/DD/YYYY')}`}</h1>
  )
}

export default Today
