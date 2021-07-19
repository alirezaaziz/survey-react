import React from 'react'
import './ResultPage.css'

const ResultPage = () => {
  const userDetail = JSON.parse(localStorage.getItem('userDetail'))
  const question1 = JSON.parse(localStorage.getItem('textArea'))
  const question2 = JSON.parse(localStorage.getItem('radioButton'))
  const question3 = JSON.parse(localStorage.getItem('checkbox'))

  console.log('user detail:', userDetail)
  console.log('question1:', question1)
  console.log('question2:', question2)
  console.log('question3:', question3)

  return (
    <div className="scale-up-center">
      Thanks for sharing your comments with us. Your information is now visible
      on the console.
    </div>
  )
}
export default ResultPage
