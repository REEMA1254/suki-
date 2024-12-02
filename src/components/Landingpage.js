import"../styles/Landingpage.css"

export default function Landingpage(props) {
  console.log(props)
  return (
    <div>
        <div className="landingpage">
      <h1>SUKI&</h1>
      <h6>{props.x}</h6>
      </div>
    </div>
  )
}
