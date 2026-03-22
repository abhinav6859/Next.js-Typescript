// app/user/[id]/page.tsx
type Props = {
  params: {
    id: string;
  };
};

export default  function UserPage({ params }: Props) {
    
  return <h1>User ID: {params.id}</h1>;
}
