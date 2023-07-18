import { useContentfulInspectorMode } from "@contentful/live-preview/react"

export default function PostTitle({ children, id }) {
  const inspectorProps = useContentfulInspectorMode()
  return (
    <h1 
      {
        ...inspectorProps({
          entryId: id,
          fieldId: 'title'
        })
      }
      className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
