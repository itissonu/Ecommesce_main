import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid gray',
    boxShadow: 24,
    p: 4,
};

export default function QuantityModal({ handleClose, open, selectedProduct,handleSetSize ,border}) {

   

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className=''>
                <div className='flex gap-3 m-2'>
                    <img className='w-20 h-20' src={selectedProduct.images[0].url}/>
                    <div className='flex flex-col'>
                    <span className=' font-bold text-base capitalize'> {selectedProduct.brand}</span>
                    <span className='text-gray-500 text-base'>{selectedProduct.category}</span>
                    <span className='text-gray-500 text-base'>Rs.{selectedProduct.price}</span>
                    </div>
                </div>
                    <span className='p-2 m-2 font-bold'> Select A  Size</span>
                    <div className='flex gap-2 m-4'>

                        {selectedProduct.size.map((b,index) => (
                            <div key={index} className='flex '>
                                <button onClick={()=>handleSetSize(selectedProduct.images[0].id, b,index)} className={`${border === index ? 'border-red-400 shadow-red-300' : 'border-slate-600'}   hover:bg-slate-100  p-5 border-[1px] `}>{b}</button>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center w-full'>
                    <button  className='w-full text-white font-bold h-max p-3  rounded-md  bg-[#117a7a]' onClick={handleClose}>DONE</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}