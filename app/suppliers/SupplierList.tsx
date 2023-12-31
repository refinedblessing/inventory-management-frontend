import React from 'react'
import ISupplier from '../types/supplier.type'
import Supplier from './Supplier'

const SupplierList = ({ suppliers, deleteSupplier, editSupplier }: any) => {
  return (
    <>
      <div className="my-8 overflow-x-auto">
        <div className="flex shadow border-b">
          <table className="min-w-full table">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-2">
                  ID
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-2">
                  NAME
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-2">
                  EMAIL
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-2">
                  PHONE
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-2">
                  ADDRESS
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-2"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {suppliers?.map((supplier: ISupplier) => (
                <Supplier
                  supplier={supplier}
                  key={supplier.id}
                  deleteSupplier={deleteSupplier}
                  editSupplier={editSupplier}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SupplierList