const Filter = () => {
    return (
        <>
            <div>
                <div>
                    <span>Advanced Search</span>
                </div>
                <input
                    name="buscar"
                    type="text"
                    placeholder="Search"
                    value=""
                    className="searchInput"
                />

                <div>
                    <span>Please enter at least 3 characters.</span>
                </div>
                <button className="submitButton">Submit</button>

                <div>
                    <span>Filters</span>

                    <span>Preparation Time</span>
                    <div>
                        <div>
                            <label htmlFor="time">15’</label>
                            <input
                                type="checkbox"
                                name="time"
                                value="15"
                                className="timeCheckbox"
                            />
                        </div>
                        <div>
                            <label htmlFor="time">25’</label>
                            <input
                                type="checkbox"
                                name="time"
                                value="25"
                                className="timeCheckbox"
                            />
                        </div>
                        <div>
                            <label htmlFor="time">35’</label>
                            <input
                                type="checkbox"
                                name="time"
                                value="35"
                                className="timeCheckbox"
                            />
                        </div>
                        <div>
                            <label htmlFor="time">+35’</label>
                            <input
                                type="checkbox"
                                name="time"
                                value="36"
                                className="timeCheckbox"
                            />
                        </div>
                    </div>

                    <div>
                        <span>Ingrediente</span>
                        <select
                            name="recetas-ingredients"
                            multiple
                            placeholder="Ingredient Search"
                            id="select-1"
                            tabIndex="-1"
                            className="ingredientSelect"
                        ></select>
                    </div>
                    <div>
                        <span>Categoría</span>
                        <select
                            name="recetas-categories"
                            multiple
                            placeholder="Buscar Categoría"
                            id="select-1"
                            tabIndex="-1"
                            className="categorySelect"
                        ></select>
                    </div>
                    <div>
                        <span>Area</span>
                        <select
                            name="area"
                            multiple
                            placeholder="Search Area"
                            id="select-3"
                            tabIndex="-1"
                            className="areaSelect"
                        ></select>
                    </div>

                    <button className="clearButton">Limpiar</button>
                    <button className="applyButton">Aplicar</button>
                </div>
            </div>
        </>
    );
};

export default Filter;
