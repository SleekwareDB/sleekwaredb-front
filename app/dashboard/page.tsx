import React from "react"
import Link from "next/link"

export default function dashboard() {
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-2 py-4 px-2 border border-l-0 border-t-0 border-b-0 dark:border-gray-600 border-gray-200">
        <div className="space-y-2">
          <Link
            href={"javascript:"}
            className={`inline-flex w-full text-sm dark:bg-slate-800 bg-slate-200 text-left py-2 px-3 rounded font-bold`}
          >
            Database
          </Link>
          <Link
            href={"javascript:"}
            className={`inline-flex w-full text-sm text-left py-2 px-3 rounded font-bold hover:dark:bg-slate-800 hover:bg-slate-200`}
          >
            Team Members
          </Link>
          <Link
            href={"javascript:"}
            className={`inline-flex w-full text-sm text-left py-2 px-3 rounded font-bold hover:dark:bg-slate-800 hover:bg-slate-200`}
          >
            Users
          </Link>
          <Link
            href={"javascript:"}
            className={`inline-flex w-full text-sm text-left py-2 px-3 rounded font-bold hover:dark:bg-slate-800 hover:bg-slate-200`}
          >
            Permission
          </Link>
        </div>
      </div>
      <div className="col-auto py-4 px-2">
        <h1>Dashboard</h1>
      </div>
    </section>
  )
}
