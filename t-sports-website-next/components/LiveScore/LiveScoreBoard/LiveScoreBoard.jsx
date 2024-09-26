import React from 'react'

const LiveScoreBoard = () => {
  return (
    <section className="live-score-board mt-[92px] mb-[133px] overflow-x-scroll md:overflow-x-none">
      <table className="table-auto md:w-full border-t border-l border-r border-1 border-[#D7D7D7] rounded-[26px] overflow-x-scroll">
        {/* for batsman record*/}
        <thead className='text-left bg-[#F6F7F8]'>
          <tr className='font-light md:font-semibold font-archivo text-[18px] md:text-[30px] text-[#808080]'>
            <th className='w-[25%] md:w-[50%] pl-[30px] md:pl-[60px] py-[45px]'>Batters</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>R</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>B</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>4s</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>6s</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>SR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='w-[25%] md:w-[50%] pl-[30px] md:pl-[60px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>Rohit Sharma</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>112</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>80</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>6</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>4</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>150.00</td>
          </tr>
          <tr>
            <td className='w-[25%] md:w-[50%] pl-[30px] md:pl-[60px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>Suryakumar Yadav</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>112</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>80</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>6</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>4</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>150.00</td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto w-full border-b border-l border-r border-1 border-[#D7D7D7] rounded-[26px]">
        {/* for Bowling record*/}
        <thead className='text-left bg-[#F6F7F8]'>
          <tr className='font-light md:font-semibold font-archivo text-[18px] md:text-[30px] text-[#808080]'>
            <th className='w-[25%] md:w-[50%] pl-[30px] md:pl-[60px] py-[45px]'>Bowlers</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>O</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>M</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>R</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>W</th>
            <th className='w-[2%] md:w-[10%] py-[45px]'>Econ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='w-[25%] md:w-[50%] pl-[30px] md:pl-[60px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>Rohit Sharma</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>112</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>80</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>6</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>4</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>150.00</td>
          </tr>
          <tr>
            <td className='w-[25%] md:w-[50%] pl-[30px] md:pl-[60px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>Suryakumar Yadav</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>112</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>80</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>6</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>4</td>
            <td className='w-[2%] md:w-[10%] py-[22px] font-normal font-archivo text-[16px] md:text-[30px] text-[#808080]'>150.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default LiveScoreBoard