import GetMenu from './GetMenu.js';

export default function Menupage(){
    return(
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">bites</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">????????</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <GetMenu />
                        </div>
                    </div>
            </div>
        </div>

    )
}