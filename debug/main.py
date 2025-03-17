import pandas as pd
import json


def json_array_to_csvs(json_file_path: str, excel_file_path: str):
    """
    Converts a JSON file containing an array of sheets to multiple CSV files.

    Args:
        json_file_path (str): The path to the JSON file.
        output_dir (str): The directory where the CSV files will be created.
    """
    try:
        with open(json_file_path, 'r', encoding='utf-8') as json_file:
            data = json.load(json_file)

        if not isinstance(data, list):
            raise ValueError("JSON data must be an array of sheets (lists of dictionaries).")

        with pd.ExcelWriter(excel_file_path, engine='openpyxl') as writer:  # Use openpyxl engine
            for i, sheet_data in enumerate(data):
                if not sheet_data:
                    print(f"Warning: Sheet {i+1} is empty. Creating an empty sheet.")
                    # Create an empty DataFrame to write an empty sheet
                    df = pd.DataFrame()
                else:
                    df = pd.DataFrame(sheet_data['history'])

                sheet_name = sheet_data['symbol']
                df.to_excel(writer, sheet_name=sheet_name, index=False)

        print("Conversion complete.")

    except FileNotFoundError:
        print(f"Error: JSON file not found at {json_file_path}")
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON format in {json_file_path}")
    except ValueError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


def start():
    json_file = 'debug/cmc.json'
    output_directory = 'debug/cmc.xlsx'
    json_array_to_csvs(json_file, output_directory)


if __name__ == "__main__":
    start()
