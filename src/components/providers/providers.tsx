import { useId } from 'react';

// const GlobalScrollbar = dynamic(
//   () => import('mac-scrollbar').then((m) => m.GlobalScrollbar),
//   {
//     ssr: false,
//   },
// );

const Providers = ({ children }: React.PropsWithChildren) => {
  const uid = useId();
  return children;
  // return (
  //   <Suspense key={uid} fallback={<PageLoading />}>
  //     {children}
  //     {/* <GlobalScrollbar suppressScrollX /> */}
  //   </Suspense>
  // );
};

export default Providers;
