// import { FormWrapper, Input, Select, Textarea } from 'components/form';
// import { Button } from 'components/parts';
// import PageWrapper from 'pages';
// import React, { useCallback, useState } from 'react';
// import { SinglePagePdf } from 'components/pdf';
// import { useTranslation } from 'react-i18next';
// import { getInitialValuesOps, IFormCompany, IFormOps, validationSchemaOps } from 'pages/company/components/form.config';
// // import { addCompany } from 'api/company/detailCompany/add-company.api';
// // import { addToast } from 'services/toast';
// // import { useSubscription } from 'hooks/use-subscription.hook';
// import RightHeadingBlock from '../../add/components/action-control-add';
// import { ErrorMessage, useField } from 'formik';

// type IFormAddCompany = IFormCompany;
// type IFormAddOps = IFormOps;

// interface IdataRequire {
//   position: string;
//   language: string;
//   quantity: number;
//   des_require: string;
// }

// function AddOps() {
//   const { t } = useTranslation();
//   const [addNew, setAddNew] = useState<boolean>(false);
//   const [jdUpload, setJdUpload] = useState<File>(null);
//   // const subscription = useSubscription();
//   const [dataInfor, setDataInfor] = useState<IFormAddCompany>({
//     rank: '',
//     address: '',
//     des_general: '',
//     upload_logo: null,
//     contact: [
//       {
//         username: '',
//         email: '',
//         position: '',
//         link: '',
//       },
//     ],
//   });

//   const [dataRequire, setDataRequire] = useState<IdataRequire[]>([]);

//   const [valuePosition, setPosition] = useState();
//   const [valueLanguage, setLanguage] = useState();
//   const [valueQuantity, setQuantity] = useState();
//   const [desRequire, setDesRequire] = useState();

//   const handleSubmitRequire = () => {
//     setDataRequire([
//       ...dataRequire,
//       {
//         position: valuePosition,
//         language: valueLanguage,
//         quantity: valueQuantity,
//         des_require: desRequire,
//       },
//     ]);
//     setAddNew(!addNew);
//   };

//   // const dataDisplay = dataRequire.length
//   //   ? dataRequire.reduce((prev, curr) => prev + curr.language + ': ' + curr.quantity + ', ', '').replace(/,\s*$/, '')
//   //   : '';

//   const MyInput = ({ props }: any) => {
//     const [field, meta] = useField(props);

//     field.value = 'ok';
//     const handleChange = useCallback(() => {
//       field.onChange(field.value);
//     }, [field]);

//     return (
//       <>
//         <input className='h-ml-8' {...props} value={field.value} onChange={handleChange} />
//         {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
//       </>
//     );
//   };

//   const onSubmit = useCallback((values: IFormAddOps) => {
//     console.log('values: ', values);
//     // const getUsersSub = addCompany({
//     //   companyName: values.company_name,
//     //   am: values.am,
//     //   sale: values.sale,
//     //   rank: dataInfor.rank,
//     //   address: dataInfor.address,
//     //   linkAvatar: 'dataInfor.logo',
//     //   status: values.status,
//     //   des_project: values.des_project,
//     //   des_general: dataInfor.des_general,
//     //   attackJD: 'attack jd',
//     //   require: 'java: 10, C++: 20',
//     //   listContact: dataInfor.contact.map((item) => ({
//     //     contact_name: item.username,
//     //     email: item.email,
//     //     contact_link: item.link,
//     //     position: item.position,
//     //   })),
//     // }).subscribe({
//     //   next: () => {
//     //     addToast({
//     //       title: 'Add user success',
//     //       description: 'Add user success',
//     //     });
//     //   },
//     // });

//     // subscription.add(getUsersSub);
//   }, []);

//   console.log('dataInfor:', dataInfor);

//   const handleAddNew = () => setAddNew(!addNew);

//   const handleChangeJd = (e: React.ChangeEvent) => setJdUpload((e.target as HTMLInputElement).files[0]);

//   return (
//     <PageWrapper
//       title='Thêm Ops'
//       className='p-ops-add'
//       rightHeadingBlock={<RightHeadingBlock setDataInfor={setDataInfor} />}
//     >
//       <FormWrapper<IFormAddOps>
//         initialValues={getInitialValuesOps()}
//         onSubmit={onSubmit}
//         validationSchema={validationSchemaOps}
//       >
//         <div>
//           <div className='row'>
//             <div className='col-md-12'>
//               <div className='card card-info card-outline'>
//                 <div className='card-body'>
//                   <div className='form-group row'>
//                     <label className='col-sm-2 col-form-label'>
//                       {t('label.company_name')} <span className='h-text-danger'>*</span>
//                     </label>
//                     <div className='col-sm-3'>
//                       <Select
//                         name='company_name'
//                         options={[
//                           { label: 'FPT', value: 1 },
//                           { label: 'VMO', value: 2 },
//                         ]}
//                       />
//                     </div>
//                   </div>

//                   <div className='row'>
//                     <div className='col-sm-6'>
//                       <div className='form-group row'>
//                         <label className='col-sm-4 col-form-label'>
//                           AM <span className='h-text-danger'>*</span>
//                         </label>
//                         <div className='col-sm-6'>
//                           <Select
//                             name='am'
//                             options={[
//                               { label: 'Nguyễn Văn A', value: 1 },
//                               { label: 'Nguyễn Văn B', value: 2 },
//                             ]}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className='col-sm-6'>
//                       <div className='form-group row'>
//                         <label className='col-sm-4 col-form-label'>
//                           Sale <span className='h-text-danger'>*</span>
//                         </label>
//                         <div className='col-sm-6'>
//                           <Select
//                             name='sale'
//                             options={[
//                               { label: 'Nguyễn Văn A', value: 1 },
//                               { label: 'Nguyễn Văn B', value: 2 },
//                             ]}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='form-group row'>
//                     <label className='col-sm-2'>
//                       {t('label.request')} <span className='h-text-danger'>*</span>
//                     </label>
//                     <MyInput name='require' type='text' readOnly />
//                     {/* <input name='require' readOnly={false} className='h-ml-8' defaultValue={'ok'} /> */}
//                     <ErrorMessage name='require' />
//                   </div>

//                   <div className='form-group row'>
//                     <div className='col-sm-2'></div>
//                     <div className='col-sm-6'>
//                       <div className='btn-add' onClick={handleAddNew}>
//                         <i className='fas fa-plus btn-add-icon'></i>
//                         <span className='h-ml-8'>{t('btn.add_new')}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {addNew && (
//                     <div className='row'>
//                       <div className='col-sm-2'></div>
//                       <div className='col-sm-10'>
//                         <div className='row'>
//                           <div className='col-sm-4'>
//                             <div className='form-group row'>
//                               <label className='col-sm-4 col-form-label'>{t('label.position')}</label>
//                               <div className='col-sm-7'>
//                                 <Select
//                                   name='position'
//                                   onChange={(value) => setPosition(value)}
//                                   options={[
//                                     { label: 'PM', value: 'PM' },
//                                     { label: 'QA', value: 'QA' },
//                                   ]}
//                                 />
//                               </div>
//                             </div>
//                           </div>

//                           <div className='col-sm-4'>
//                             <div className='form-group row'>
//                               <label className='col-sm-4 col-form-label'>{t('label.language')}</label>
//                               <div className='col-sm-7'>
//                                 <Select
//                                   name='language'
//                                   onChange={(value) => setLanguage(value)}
//                                   options={[
//                                     { label: 'ReactJs', value: 'ReactJs' },
//                                     { label: 'Java', value: 'Java' },
//                                   ]}
//                                 />
//                               </div>
//                             </div>
//                           </div>

//                           <div className='col-sm-4'>
//                             <div className='form-group row'>
//                               <label className='col-sm-4 col-form-label'>{t('label.quantity')}</label>
//                               <div className='col-sm-5'>
//                                 <Input
//                                   type='number'
//                                   name='quantity'
//                                   onChange={(item) => setQuantity(item.target.value)}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className='row'>
//                           <div className='col-sm-8'>
//                             <div className='form-group row '>
//                               <label className='col-sm-2 col-form-label'>{t('label.description')}</label>
//                               <div className='col-sm-10'>
//                                 <Textarea name='des_require' onChange={(e) => setDesRequire(e.target.value)} />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className='form-group row'>
//                           <span className='col-sm-1'></span>
//                           <div className='col-sm-10'>
//                             <Button size='s' onClick={handleSubmitRequire}>
//                               {t('btn.save_position')}
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <div className='form-group row'>
//                     <label className='col-sm-2 col-form-label'>
//                       {t('label.state')} <span className='h-text-danger'>*</span>
//                     </label>
//                     <div className='col-sm-2'>
//                       <Select
//                         name='status'
//                         options={[
//                           { label: 'Doing', value: 1 },
//                           { label: 'Done', value: 2 },
//                         ]}
//                       />
//                     </div>
//                   </div>

//                   <div className='form-group row '>
//                     <label className='col-sm-2 col-form-label'>{t('label.description')}</label>
//                     <div className='col-sm-7'>
//                       <Textarea placeholder='Project solve problem about...' name='des_project' />
//                     </div>
//                   </div>

//                   <div className='form-group row'>
//                     <label className='col-sm-2 col-form-label' htmlFor='fileUploadLogo'>
//                       {t('Attach JD')}
//                     </label>
//                     <div className='col-sm-7'>
//                       <div className='custom-file'>
//                         <input
//                           name='upload_jd'
//                           type='file'
//                           accept='application/pdf'
//                           className='custom-file-input'
//                           onChange={handleChangeJd}
//                         />
//                         <label className='custom-file-label'>{jdUpload?.name || 'Select file or drop file here'}</label>
//                       </div>
//                     </div>
//                   </div>

//                   {jdUpload && <SinglePagePdf pdf={jdUpload} />}
//                   <div className='h-d_flex -justify-center'>
//                     <Button type='submit'>{t('btn.save')}</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </FormWrapper>
//     </PageWrapper>
//   );
// }

// export default AddOps;
