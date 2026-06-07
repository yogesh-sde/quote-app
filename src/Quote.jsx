function Quote({ quote, author, onNewQuote}) {
  return (
   
    <div style={{ backgroundColor: '#0a0a0f' }}
         className="flex flex-col justify-center items-center min-h-screen py-8 px-4">

      
      <div style={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}
           className="rounded-2xl p-6 md:p-10 w-11/12 max-w-lg mx-auto min-h-64">

       
        <p style={{ color: '#f9fafb' }}
           className="text-xl md:text-2xl font-bold italic leading-relaxed mb-4">
          "{quote}"
        </p>

        
        <p style={{ color: '#9ca3af' }} className="text-base mb-8">
          — {author}
        </p>

        
        <button style={{ backgroundColor: '#6366f1' }}
                className="cursor-pointer text-white px-6 py-2 rounded-lg font-semibold" onClick={onNewQuote}>
          New Quote
        </button>

      </div>
    </div>
  );
}
export default Quote;