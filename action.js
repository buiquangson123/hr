// import React, { useCallback } from 'react';
// import { Button } from 'components/parts';
// import { openModal } from 'services/modal';
// import ModalAddInforCompany from 'pages/company/add';
// import { IFormCompany } from '../../../components/form.config';

// // type IFormAddCompany = IFormCompany;
// interface IRightHeadingBlock {
//   setDataInfor: (data: IFormCompany) => void;
// }

// export default function RightHeadingBlock({ setDataInfor }: IRightHeadingBlock) {
//   const openModalAddInforCompany = useCallback(() => {
//     const modal = openModal(ModalAddInforCompany);

//     modal.afterClosed().subscribe((data) => {
//       setDataInfor(data);
//     });
//   }, []);

//   return (
//     <div className='h-d_flex -justify-flex-end'>
//       <Button className='h-mr-8' type='button' onClick={openModalAddInforCompany}>
//         Thêm thông tin liên hệ
//       </Button>
//     </div>
//   );
// }
