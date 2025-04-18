import { ListItem } from '../components/ListItem.jsx'
import { Form } from '../components/Form.jsx'
import { Loading } from '../components/Loading.jsx'
import { useContext } from 'react'
import { PageData } from "../store/function.jsx"
import { Message } from '../components/Message.jsx'

export const Expenditure = () => {
    const { expList, loading } = useContext(PageData);

    return (<>
        <div className="flex flex-col-reverse md:flex-row" >

            <div className='rounded-box shadow-md m-4 md:min-w-100 lg:w-120'>

                <ul className="list bg-base-100 ">

                    <p className="p-4 pb-2 text-lg text-center tracking-wide">Expenditures</p>

                    {loading ? <Loading /> : expList.length === 0 ? <Message /> : expList.map(item => <ListItem title={item.title} amount={item.amount} description={item.description} id={item.t_id} type={"expense"}></ListItem>)}

                </ul>
            </div>

            <Form type="expense"></Form>
        </div >

    </>
    )
}
