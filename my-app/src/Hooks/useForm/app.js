import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './form'

function App()
{
    return (
        <div>
            <main className="container">
                <section className="row mt-5">
                    <article className="col-md-6 offset-md-3">
                        <Form />
                    </article>
                </section>

            </main>
        </div>
    )
}

export default App;