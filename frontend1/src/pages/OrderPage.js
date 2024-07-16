import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import moment from 'moment'
import displayINRCurrency from '../helpers/displayCurrency'

const OrderPage = () => {
  const [data, setData] = useState([])
  const fetchOrderDetails = async() => {
    const response = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials:'include'
    })
    const responseData = await response.json()
    setData(responseData.data)
    console.log("order list", responseData)
    
  }
  useEffect(() => {
    fetchOrderDetails()
  },[])
  return (
    <div>
      {
        !data[0] && (
          <p>No order Avaliable</p>
        )
      }
      <div className="p-4 w-full ">
        {
          data.map((item, index) => {
            return (
              <div key={item.userId+index} >
                <p className="font-medium text-lg ">{moment(item.createdAt).format('LLL')}</p>
                <div className="border rounded">
                  <div className="flex flex-col lg:flex-rowjustify-between">
                     <div className="grid gap-1">
                  {
                    item?.productDetails.map((product, index) => {
                      return (
                        <div key={product.productId+index} className="flex gap-3 bg-slate-100">
                          <img src={product.image} className="w-28 h-28 bg-white object-scale-down p-2" />
                          <div>
                            <div className="font-medium text-lg text-ellipsis line-clamp-1">{product.name}</div>
                          <div className="flex items-center gap-5">
                            <div className="text-lg text-red-500">{displayINRCurrency(product.price)}</div>
                            <p>quantity:{product.quantity}</p>
                          </div>
                            </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="flex flex-col lg:flex-row gap-4 p-2 min-w-[300px]">
                  <div>
                  <div className="text-lg font-medium">payment Details:</div>
                  <p className="ml-1">payment method:{item.paymentDetails.payment_method_type}</p>
                  <p className=" ml-1">payment status:{item.paymentDetails.payment_status}</p>
                </div>
                <div>
                  <div className="text-lg font-medium">shipping details</div>
                  {
                    item.shipping_options.map((shipping, index) => {
                      return (
                        <div key={shipping.shipping_rate} className=" ml-1">
                          shipping amount :{shipping.shipping_amount}
                          </div>
                      )
                    })
                  }
                </div>
                </div>
                  </div>
                <div className="font-semibold ml-auto w-fit lg:text-lg ">
                    Total Amount:{item.totalAmount}
                </div>
                </div>
              </div>

              
            )
          })
        }
      </div>
      </div>
  )
};

export default OrderPage;