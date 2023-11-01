
const OrgDetail = () => {
  return (
    <div className="w-full mb-5 relative flex flex-col items-center justify-center">
    <div className="w-full p-6 bg-white rounded-md shadow-lg border-top">
    <h1 className="text-2xl font-bold mb-5">Organization Details</h1><hr /><br />
    <form className="space-y-4">
        <div className="flex">
            <label className="label font-semibold">
                <span className="text-base label-text">Organization Name: </span>
            </label>
            <input name="organization_name" disabled value={orgDetail?.organization_name} onChange={handleData} type="text" placeholder="Enter Organization name" className="w-auto input input-bordered" />
            { serverError.organization_name ? <small className="text-red-600">{serverError.organization_name[0]}</small>:"" }
        </div>
        <div>
            <span className="text-base label-text">
                Created Date: {ShowDateTime(orgDetail?.created_date)}</span>
        </div>
        <div>
            <label className="label font-semibold">
                <span className="text-base label-text">Organization Description:</span>
            </label>
            <input name="description" value={orgDetail?.description} onChange={handleData} type="text" className="w-full input input-bordered" />
        </div>
        <div className="flex">
            <label className="label font-semibold"><span className="text-base label-text">Upload Organization Logo: </span></label>
            <input name="image" onChange={handleOrgLogo} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs input-md" />
        </div>
        <div className="flex">
            <div className="flex w-full">
                <label className="label font-semibold">
                    <span className="text-base label-text">Country: </span>
                </label>
                <input name="country" value={orgDetail?.country} onChange={handleData} type="text" className=" input input-bordered" />
            </div>
            <div className="flex w-full">
                <label className="label font-semibold">
                    <span className="text-base label-text">Zip Code: </span>
                </label>
                <input name="zip_code" value={orgDetail?.zip_code} onChange={handleData} type="text" className=" input input-bordered" />
            </div>
        </div>
        <div className="flex">
            <label className="label font-semibold">
                <span className="text-base label-text">Phone Number: </span>
            </label>
            <input name="company_phone_number" value={orgDetail?.company_phone_number || orgDetail?.org_phone_number} onChange={handleData} type="text" className=" input input-bordered" />
        </div>
        <div>
            <button onClick={handleSubmit} className="btn btn-block btn-primary">Save Changes</button>
        </div>
    </form>
    </div>
</div>
  )
}

export default OrgDetail