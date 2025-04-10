import { List } from '../components/List'
import { Form } from '../components/Form'
import { Loading } from '../components/Loading'
import { useContext } from 'react'
import { PageData } from '../store/function'
import { Message } from '../components/Message'

export const Incomes = () => {
    const { incList, loading } = useContext(PageData);

    return (<>
        <div className="flex flex-col-reverse md:flex-row" >

            <div className='rounded-box shadow-md m-4 md:min-w-100 lg:w-120'>

                <ul className="list bg-base-100 ">

                    <p className="p-4 pb-2 text-lg text-center tracking-wide">Incomes</p>

                    {loading ? <Loading /> : incList.length === 0 ? <Message /> : incList.map(item => <List title={item.title} amount={item.amount} description={item.description} id={item.t_id} type={"income"}></List>)}

                </ul>

            </div>

            <Form type={"income"}></Form>

        </div >
    </>
    )
}
